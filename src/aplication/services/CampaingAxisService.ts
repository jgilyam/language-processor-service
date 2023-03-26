import { CampaingAxisOutDTO, LanguageModelOutDTO } from "../../domain/dtos";
import { ICampaingAxisRepository } from "../../domain/interfaces";

export class CampaingAxisService {
  constructor(private readonly campaingAxisRepository: ICampaingAxisRepository) {}

  public findCampaingAxisByTopic = async (topicId: string): Promise<CampaingAxisOutDTO> => {
    const campaingAxisOutDTO = await this.campaingAxisRepository.findCampaingAxisRepositoryByTopic(topicId);

    return campaingAxisOutDTO as CampaingAxisOutDTO;
  };
}
