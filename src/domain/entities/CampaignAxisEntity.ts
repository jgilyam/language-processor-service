import { TopicEntity } from "./TopicEntity";

export interface CampaignAxisEntity {
  id?: string;
  topic: TopicEntity;
  proposal: string;
}
