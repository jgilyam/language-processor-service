import {
  MessageProcessedInDTO,
  MessageProcessedOutDTO,
} from "../../domain/dtos";
import {
  IMessageProcessedRepository,
  ITextProcessor,
} from "../../domain/interfaces/";

export class MessageProcessedSercice {
  constructor(
    private readonly messageProcessedRepository: IMessageProcessedRepository,
    private readonly textProcessor: ITextProcessor
  ) {}
  public async generateReposone(messageProcessedInDTO: MessageProcessedInDTO) {}

  private async generatePrompt(): Promise<string> {
    throw "metodo no implementado";
  }
  private async classifyMessagesAccordingToYopic(
    message: string,
    topics: string[]
  ) {}
}
