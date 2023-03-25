import { TopicEntity } from "../../entities";
import { LanguageModelOutDTO } from "../languageModelDTOs/LanguageModelOutDTO";

export interface MessageProcessedOutDTO {
  id: string;
  topic: TopicEntity;
  messageIn: string;
  messageOut: string;
  languageModel: LanguageModelOutDTO;
}
