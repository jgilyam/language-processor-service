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
  public async generateReposone(messageProcessedInDTO: MessageProcessedInDTO): Promise<MessageProcessedOutDTO> {
    const topicOfMessage = await this.classifyMessagesAccordingToTopic(messageProcessedInDTO);
    console.log(topicOfMessage);
    const messageProcessedOutDTO = await this.generateResponseAccordingToProposals(messageProcessedInDTO, topicOfMessage);
    return messageProcessedOutDTO;
  }
  private async generateResponseAccordingToProposals(
    messageProcessedInDTO: MessageProcessedInDTO,
    topicOfMessage: TopicOutDTO
  ): Promise<MessageProcessedOutDTO> {
    const { messageIn } = messageProcessedInDTO;
    const languageModel = await this.languageModelService.findLanguageModelByOperation(LanguageModelOperation.ResponseGenerator);
    let { messages } = languageModel.chatCompletition;
    const systemMessageIndex = messages.findIndex((message) => {
      message.role === "system";
    });

    let newSystemMessage = messages[systemMessageIndex];

    const { proposal } = await this.campaignAxisService.findCampaingAxisByTopic(topicOfMessage.name);

    newSystemMessage.content = newSystemMessage.content + proposal;

    messages[systemMessageIndex] = newSystemMessage;

    messages.push({
      role: "user",
      content: messageIn,
    });
    const proccesedMessage = await this.textProcessor.sendToProcess(messages);
    const messageProcessedEntity: MessageProcessedEntity = {
      topic: { name: topicOfMessage.name },
      messageIn: messageIn,
      messageOut: proccesedMessage,
      languageModel: {
        ...languageModel,
      },
    };
    const messageProcessedEntitySaved = await this.messageProcessedRepository.save(messageProcessedEntity);
    return this.messageProcessedMapper.entityToOutDto(messageProcessedEntitySaved);
  }

  private async generatePromptForMessageClassifier(message: MessageProcessedInDTO): Promise<Message[]> {
    const topics = await this.topicService.findAllTopics();
    const { chatCompletition } = await this.languageModelService.findLanguageModelByOperation(LanguageModelOperation.MessageClassifier);

    let { messages } = chatCompletition;
    const systemMessageIndex = messages.findIndex((message) => {
      message.role === "system";
    });

    let newSystemMessage = messages[systemMessageIndex];

    const topicsString = topics
      .map((topic) => {
        topic.name;
      })
      .reduce((acc, topicString) => acc + topicString + ", ", " ");

    newSystemMessage.content = newSystemMessage.content + topicsString;

    messages[systemMessageIndex] = newSystemMessage;
    messages.push({
      role: "user",
      content: message.messageIn,
    });

    return messages;
  }

  private async classifyMessagesAccordingToTopic(message: MessageProcessedInDTO): Promise<TopicOutDTO> {
    const prompt = await this.generatePromptForMessageClassifier(message);
    const proccesedMessage = await this.textProcessor.sendToProcess(prompt);
    const topic = await this.topicService.findAllTopics(proccesedMessage);
    return topic[0];
  }
}
