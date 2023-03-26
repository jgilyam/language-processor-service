import { ChatCompletionRequestMessage } from "openai";
import { Message } from "../../domain/entities";
import { ITextProcessor } from "../../domain/interfaces";
import openai from "./openai/openai";

export class TextProcessorOpenAI implements ITextProcessor {
  async sendToProcess(messages: Message[]): Promise<string> {
    const model = "gpt-3.5-turbo";
    //const messages: Array<ChatCompletionRequestMessage> = [];
    const temperature = 0.8;
    const { data } = await openai.createChatCompletion({
      model,
      messages,
      temperature,
    });

    const responseMessage = data.choices[0].message?.content as string;
    console.log(responseMessage);
    return responseMessage;
  }
}
