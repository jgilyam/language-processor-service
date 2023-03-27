import { LanguageModelEntity } from "./LanguageModelEntity";
import { TopicEntity } from "./TopicEntity";

export interface MessageProcessedEntity {
  _id: string;
  topic: TopicEntity;
  messageIn: string;
  messageOut: string;
  languageModel: LanguageModelEntity;
}
