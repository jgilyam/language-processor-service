import {
  MessageProcessedInDTO,
  MessageProcessedOutDTO,
  TopicOutDTO,
} from "../../domain/dtos";
import {
  IMessageProcessedRepository,
  ITextProcessor,
} from "../../domain/interfaces/";
import { TopicService } from "./TopicService";

export class MessageProcessedSercice {
  constructor(
    private readonly messageProcessedRepository: IMessageProcessedRepository,
    private readonly textProcessor: ITextProcessor,
    private readonly topicService: TopicService
  ) {}
  public async generateReposone(messageProcessedInDTO: MessageProcessedInDTO) {
    const topicOfMessage = await this.classifyMessagesAccordingToTopic(
      messageProcessedInDTO
    );
  }

  private async generatePromptForMessageClassifier(
    message: MessageProcessedInDTO
  ): Promise<string> {
    const topics = await this.topicService.findAllTopics();
    const instruction = "";

    throw new Error("metodo no implementado");
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
