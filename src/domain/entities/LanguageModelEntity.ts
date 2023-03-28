import { LanguageModelOperation } from "../enums";

export interface LanguageModelEntity {
  id: string;
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
