import { CampaignAxisEntity } from "../../../domain/entities";
import { ICampaingAxisRepository } from "../../../domain/interfaces";

export class CampaingAxisRepositoryMock implements ICampaingAxisRepository {
  save(entity: CampaignAxisEntity): Promise<CampaignAxisEntity> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<CampaignAxisEntity[] | null> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<CampaignAxisEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<CampaignAxisEntity | null> {
    throw new Error("Method not implemented.");
  }
}
