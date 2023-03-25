import { LanguagesModelsEntity } from "./LanguagesModelsEntity";
import { TopicEntity } from "./TopicEntity";

export interface MessagesProcessedEntity {
  topic: TopicEntity;
  messageIn: string;
  messageOut: string;
  languageModel: LanguagesModelsEntity;
}
