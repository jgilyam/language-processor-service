import { ChatCompletition } from "../../entities";
import { LanguageModelOperation } from "../../enums";

export interface LanguageModelInDTO {
  name: string;
  description: string;
  chatCompletition: ChatCompletition;
  operation: LanguageModelOperation;
}
