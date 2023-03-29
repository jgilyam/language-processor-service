import { ChatCompletionRequestMessage } from "openai";
import { Message } from "../../domain/entities";
import { ITextProcessor } from "../../domain/interfaces";
import openai from "./openai/openai";

export class TextProcessorOpenAI implements ITextProcessor {
  sendToProcess = async (messages: Message[]): Promise<string> => {
    const model = "gpt-3.5-turbo";
    //const messages: Array<ChatCompletionRequestMessage> = [];
    const temperature = parseInt(process.env.OPEN_AI_TEMPERATURE || "0.7");

    const { data } = await openai.createChatCompletion({
      model,
      messages,
      temperature,
    });

    const responseMessage = data.choices[0].message?.content as string;

    console.log(JSON.stringify(messages, undefined, 2));
    console.log("-------");
    console.log(JSON.stringify(responseMessage, undefined, 2));
    console.log("-------");

    return responseMessage;
  };
}
