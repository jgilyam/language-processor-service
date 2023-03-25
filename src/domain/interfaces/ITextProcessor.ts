import { Message } from "../entities";

export interface ITextProcessor {
  sendToProcess(messages: Message[]): Promise<string>;
}
