import { TopicEntity } from "./TopicEntity";

export interface CampaignAxisEntity {
  _id: string;
  topic: TopicEntity;
  proposal: string;
}
