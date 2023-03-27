import { CampaignAxisEntity } from "../entities";
import { IBaseRepository } from "./IBaseRepository";

export interface ICampaingAxisRepository extends IBaseRepository<CampaignAxisEntity> {
  findCampaingAxisRepositoryByTopic(topicId: string): Promise<CampaignAxisEntity>;
}
