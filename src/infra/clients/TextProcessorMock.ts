import { Message } from "../../domain/entities";
import { ITextProcessor } from "../../domain/interfaces";

export class TextProcessorMock implements ITextProcessor {
  sendToProcess = async (messages: Message[]): Promise<string> => {
    const responseMessage = "Seguridad";

    console.log(JSON.stringify(messages, undefined, 2));
    console.log("-------");
    console.log(JSON.stringify(responseMessage, undefined, 2));
    console.log("-------");

    return responseMessage;
  };
}
