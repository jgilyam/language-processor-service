import { CampaingAxisInDTO, CampaingAxisOutDTO } from "../../domain/dtos";
import { ICampaingAxisRepository } from "../../domain/interfaces";
import { CampaingAxisMapper } from "../../domain/mappers";

export class CampaingAxisService {
  constructor(private readonly campaingAxisRepository: ICampaingAxisRepository, private readonly campaintAxisMapper: CampaingAxisMapper) {}

  public findCampaingAxisByTopic = async (topicId: string): Promise<CampaingAxisOutDTO> => {
    const campaingAxisOutDTO = await this.campaingAxisRepository.findCampaingAxisRepositoryByTopic(topicId);

    return this.campaintAxisMapper.entityToOutDto(campaingAxisOutDTO);
  };
  public addCampaingAxis = async (campaingAxisInDTO: CampaingAxisInDTO) => {};
}
