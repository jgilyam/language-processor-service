import { ChatCompletition } from "../../entities";
import { LanguageModelOperation } from "../../enums";

export interface LanguageModelOutDTO {
  id: string;
  name: string;
  description: string;
  chatCompletition: ChatCompletition;
  operation: LanguageModelOperation;
}
