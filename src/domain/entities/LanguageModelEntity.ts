import { LanguageModelOperation } from "../enums";

export interface LanguageModelEntity {
  name: string;
  description: string;
  chatCompletition: ChatCompletition;
  operation: LanguageModelOperation;
}

export type ChatCompletition = {
  model: string;
  messages: Message[];
};

export type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};
