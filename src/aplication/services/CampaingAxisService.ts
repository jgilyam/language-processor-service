import { CampaingAxisInDTO, CampaingAxisOutDTO } from "../../domain/dtos";
import { ICampaingAxisRepository } from "../../domain/interfaces";
import { CampaingAxisMapper, TopicMapper } from "../../domain/mappers";

export class CampaingAxisService {
  constructor(private readonly campaingAxisRepository: ICampaingAxisRepository, private readonly campaintAxisMapper: CampaingAxisMapper) {}

  public findCampaingAxisByTopic = async (topicId: string): Promise<CampaingAxisOutDTO> => {
    const campaingAxisEntity = await this.campaingAxisRepository.findCampaingAxisRepositoryByTopic(topicId);

    return this.campaintAxisMapper.entityToOutDto(campaingAxisEntity);
  };
  public addCampaingAxis = async (campaingAxisInDTO: CampaingAxisInDTO): Promise<CampaingAxisOutDTO> => {
    const campaingAxisEntity = this.campaintAxisMapper.inDtoToEntity(campaingAxisInDTO);
    const campaingAxisEntitySaved = await this.campaingAxisRepository.save(campaingAxisEntity);
    return this.campaintAxisMapper.entityToOutDto(campaingAxisEntitySaved);
  };
  public findAll = async (): Promise<CampaingAxisOutDTO[]> => {
    const campaingAxisEntities = await this.campaingAxisRepository.findAll();
    return campaingAxisEntities?.map((entity) => this.campaintAxisMapper.entityToOutDto(entity));
  };
}
