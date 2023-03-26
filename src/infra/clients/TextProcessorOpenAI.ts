import { Message } from "../../domain/entities";
import { ITextProcessor } from "../../domain/interfaces";

export class TextProcessorOpenAI implements ITextProcessor {
  sendToProcess(messages: Message[]): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
