import { CampaignAxisEntity } from "../../../../domain/entities";
import { ICampaingAxisRepository } from "../../../../domain/interfaces";
import CampaignAxis from "./models/CampainAxisSchema";

export class CampaingAxisMongosseRepository implements ICampaingAxisRepository {
  findCampaingAxisRepositoryByTopic(topicId: string): Promise<CampaignAxisEntity> {
    throw new Error("Method not implemented.");
  }
  async save(entity: CampaignAxisEntity): Promise<CampaignAxisEntity> {
    const campaignAxis = new CampaignAxis({
      ...entity,
    });
    return await campaignAxis.save();
  }
  async findAll(): Promise<CampaignAxisEntity[]> {
    return await CampaignAxis.find();
  }
  findById(id: string): Promise<CampaignAxisEntity> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<CampaignAxisEntity> {
    throw new Error("Method not implemented.");
  }
}
