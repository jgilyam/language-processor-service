import { CampaingAxisOutDTO, LanguageModelOutDTO } from "../../domain/dtos";
import { ICampaingAxisRepository } from "../../domain/interfaces";

export class CampaingAxisService {
  constructor(
    private readonly campaingAxisRepository: ICampaingAxisRepository
  ) {}

  public async findCampaingAxisByTopic(
    name?: string
  ): Promise<CampaingAxisOutDTO> {
    throw new Error("metodo no implementado");
  }
}
