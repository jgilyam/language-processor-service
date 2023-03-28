import { CampaingAxisInDTO, CampaingAxisOutDTO } from "../../domain/dtos";
import { ICampaingAxisRepository } from "../../domain/interfaces";
import { CampaingAxisMapper, TopicMapper } from "../../domain/mappers";
import { TopicService } from "./TopicService";

export class CampaingAxisService {
  constructor(
    private readonly campaingAxisRepository: ICampaingAxisRepository,
    private readonly campaintAxisMapper: CampaingAxisMapper,
    private readonly topicService: TopicService
  ) {}

  public findCampaingAxisByTopic = async (topicId: string): Promise<CampaingAxisOutDTO> => {
    const campaingAxisEntity = await this.campaingAxisRepository.findCampaingAxisRepositoryByTopic(topicId);
    if (campaingAxisEntity) return this.campaintAxisMapper.entityToOutDto(campaingAxisEntity);
    else return { id: " ", topic: { id: " ", name: " " }, proposal: " " };
  };
  public addCampaingAxis = async (campaingAxisInDTO: CampaingAxisInDTO): Promise<CampaingAxisOutDTO> => {
    const { topicId } = campaingAxisInDTO;
    const topicOutDTO = await this.topicService.findById(topicId);
    const campaingAxisEntity = this.campaintAxisMapper.campaingAxisInDTOAndTopicOutDTO(campaingAxisInDTO, topicOutDTO);
    const campaingAxisEntitySaved = await this.campaingAxisRepository.save(campaingAxisEntity);
    return this.campaintAxisMapper.entityToOutDto(campaingAxisEntitySaved);
  };
  public findAll = async (): Promise<CampaingAxisOutDTO[]> => {
    const campaingAxisEntities = await this.campaingAxisRepository.findAll();
    return campaingAxisEntities?.map((entity) => this.campaintAxisMapper.entityToOutDto(entity));
  };
}
