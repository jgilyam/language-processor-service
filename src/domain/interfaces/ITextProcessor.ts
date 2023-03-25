export interface ITextProcessor {
  sendToProcess(prompt: string): Promise<string>;
}
