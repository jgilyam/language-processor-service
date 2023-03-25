import {
  MessageProcessedInDTO,
  MessageProcessedOutDTO,
  TopicOutDTO,
} from "../../domain/dtos";
import { Message } from "../../domain/entities";
import { LanguageModelOperation } from "../../domain/enums";
import {
  IMessageProcessedRepository,
  ITextProcessor,
} from "../../domain/interfaces/";
import { LanguageModelService } from "./LanguageModelService";
import { TopicService } from "./TopicService";

export class MessageProcessedSercice {
  constructor(
    private readonly messageProcessedRepository: IMessageProcessedRepository,
    private readonly textProcessor: ITextProcessor,
    private readonly topicService: TopicService,
    private readonly languageModelService: LanguageModelService
  ) {}
  public async generateReposone(messageProcessedInDTO: MessageProcessedInDTO) {
    const topicOfMessage = await this.classifyMessagesAccordingToTopic(
      messageProcessedInDTO
    );
  }

  private async generatePromptForMessageClassifier(
    message: MessageProcessedInDTO
  ): Promise<Message[]> {
    const topics = await this.topicService.findAllTopics();
    const languageModel =
      await this.languageModelService.findLanguageModelByOperation(
        LanguageModelOperation.MessageClassifier
      );

    let { messages } = languageModel.chatCompletition;
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

  private async classifyMessagesAccordingToTopic(
    message: MessageProcessedInDTO
  ): Promise<TopicOutDTO> {
    const prompt = await this.generatePromptForMessageClassifier(message);
    const proccesedMessage = await this.textProcessor.sendToProcess(prompt);
    const topic = await this.topicService.findAllTopics(proccesedMessage);
    return topic[0];
  }
}
