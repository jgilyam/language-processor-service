import { CampaingAxisService, LanguageModelService, TopicService } from ".";
import { MessageProcessedInDTO, MessageProcessedOutDTO, TopicOutDTO } from "../../domain/dtos";
import { Message, MessageProcessedEntity } from "../../domain/entities";
import { LanguageModelOperation } from "../../domain/enums";
import { IMessageProcessedRepository, ITextProcessor } from "../../domain/interfaces/";
import { MessageProcessedMapper } from "../../domain/mappers";

export class MessageProcessedSercice {
  constructor(
    private readonly messageProcessedRepository: IMessageProcessedRepository,
    private readonly textProcessor: ITextProcessor,
    private readonly topicService: TopicService,
    private readonly languageModelService: LanguageModelService,
    private readonly campaignAxisService: CampaingAxisService,
    private readonly messageProcessedMapper: MessageProcessedMapper
  ) {}
  public generateReposone = async (messageProcessedInDTO: MessageProcessedInDTO): Promise<MessageProcessedOutDTO> => {
    const topicOfMessage = await this.classifyMessagesAccordingToTopic(messageProcessedInDTO);
    const messageProcessedOutDTO = await this.generateResponseAccordingToProposals(messageProcessedInDTO, topicOfMessage);
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
}
