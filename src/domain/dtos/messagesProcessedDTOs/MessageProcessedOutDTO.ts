import { LanguageModelOutDTO } from "../languageModelDTOs/LanguageModelOutDTO";
import { TopicOutDTO } from "../topicDTOs/";

export interface MessageProcessedOutDTO {
  id: string;
  topic: TopicOutDTO;
  messageIn: string;
  messageOut: string;
  languageModel: LanguageModelOutDTO;
}
