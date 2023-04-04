import { CampaingAxisService, LanguageModelService, TopicService } from ".";
import { MessageProcessedInDTO, MessageProcessedOutDTO, TopicOutDTO } from "../../domain/dtos";
import { Message, MessageProcessedEntity } from "../../domain/entities";
import { LanguageModelOperation } from "../../domain/enums";
import { IMessageProcessedRepository, ITextProcessor } from "../../domain/interfaces/";
import { MessageProcessedMapper } from "../../domain/mappers";

export class MessageProcessedSercice {
  selector: number;
  constructor(
    private readonly messageProcessedRepository: IMessageProcessedRepository,
    private readonly textProcessor: ITextProcessor,
    private readonly topicService: TopicService,
    private readonly languageModelService: LanguageModelService,
    private readonly campaignAxisService: CampaingAxisService,
    private readonly messageProcessedMapper: MessageProcessedMapper
  ) {
    this.selector = 0;
  }
  public generateReposone = async (messageProcessedInDTO: MessageProcessedInDTO): Promise<MessageProcessedOutDTO> => {
    const topicOfMessage = await this.classifyMessagesAccordingToTopic(messageProcessedInDTO);

    const messageProcessedOutDTO =
      topicOfMessage.name === "Otros"
        ? this.generateGenericResponse(messageProcessedInDTO, topicOfMessage)
        : await this.generateResponseAccordingToProposals(messageProcessedInDTO, topicOfMessage);
    return messageProcessedOutDTO;
  };
  private generateResponseAccordingToProposals = async (
    messageProcessedInDTO: MessageProcessedInDTO,
    topicOfMessage: TopicOutDTO
  ): Promise<MessageProcessedOutDTO> => {
    const { proposal } = await this.campaignAxisService.findCampaingAxisByTopic(topicOfMessage.id);
    let messages = await this.languageModelService.getMessagesAndAddCompletePrompt(proposal, LanguageModelOperation.ResponseGenerator);

    const { messageIn } = messageProcessedInDTO;
    messages.push({
      role: "user",
      content: messageIn,
    });
    const proccesedMessage = await this.textProcessor.sendToProcess(messages);
    const messageProcessedEntity: MessageProcessedEntity = this.messageProcessedMapper.topicOutDTOAndMessageInMessageOutToMessageProcessedEntity(
      topicOfMessage,
      messageIn,
      proccesedMessage
    );

    //const messageProcessedEntitySaved = await this.messageProcessedRepository.save(messageProcessedEntity);

    return this.messageProcessedMapper.entityToOutDto(messageProcessedEntity);
  };

  private generatePromptForMessageClassifier = async (message: MessageProcessedInDTO): Promise<Message[]> => {
    const topics = await this.topicService.findAll();
    const topicsString = topics.map((topic) => topic.name).reduce((acc, topicString) => acc + topicString + ", ", " ");

    let messages = await this.languageModelService.getMessagesAndAddCompletePrompt(topicsString, LanguageModelOperation.MessageClassifier);
    messages.push({
      role: "user",
      content: message.messageIn,
    });

    return messages;
  };

  private classifyMessagesAccordingToTopic = async (message: MessageProcessedInDTO): Promise<TopicOutDTO> => {
    const prompt = await this.generatePromptForMessageClassifier(message);
    const proccesedMessage = await this.textProcessor.sendToProcess(prompt);
    return await this.topicService.findByName(proccesedMessage);
  };

  private generateGenericResponse = (messageProcessedInDTO: MessageProcessedInDTO, topicOfMessage: TopicOutDTO): MessageProcessedOutDTO => {
    const genericResponses = [
      "Ok, te pedimos que nos des tiempo para darte una respuesta. En el transcurso del día te vamos a responder",
      "No sabemos ahora la respuesta. Le vamos a consultar al flaco, y en el transcurso del día te escribimos",
      "Gracias por consultarnos sobre este tema. Queremos responderte con certeza. En las próximas horas te escribimos.",
    ];

    const messageProcessedOutDTO: MessageProcessedOutDTO = {
      id: "",
      topic: topicOfMessage,
      messageIn: messageProcessedInDTO.messageIn,
      messageOut: genericResponses[this.selector],
    };
    this.selector++;
    if (this.selector === genericResponses.length) this.selector = 0;
    return messageProcessedOutDTO;
  };
}


