import { LanguageModelEntity } from "./LanguageModelEntity";
import { TopicEntity } from "./TopicEntity";

export interface MessageProcessedEntity {
  id: string;
  topic: TopicEntity;
  messageIn: string;
  messageOut: string;
  //languageModel: LanguageModelEntity;
}
