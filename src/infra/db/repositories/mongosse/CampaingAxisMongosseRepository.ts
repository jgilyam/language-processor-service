import e from "express";
import { CampaignAxisEntity } from "../../../../domain/entities";
import { ICampaingAxisRepository } from "../../../../domain/interfaces";
import CampaignAxis from "./models/CampainAxisSchema";

export class CampaingAxisMongosseRepository implements ICampaingAxisRepository {
  findCampaingAxisRepositoryByTopic(topicId: string): Promise<CampaignAxisEntity> {
    throw new Error("Method not implemented.");
  }
  async save(entity: CampaignAxisEntity): Promise<CampaignAxisEntity> {
    console.log(entity);

    console.log(JSON.stringify(entity.topic.id, undefined, 2));
    const campaignAxis = new CampaignAxis({
      topic: "6421305184388f12095fa584",
      proposal: entity.proposal,
    });
    return await await campaignAxis.save();
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
