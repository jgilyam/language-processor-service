import { TopicInDTO, TopicOutDTO } from "../../domain/dtos";
import { TopicEntity } from "../../domain/entities";
import { ITopicRepository } from "../../domain/interfaces/";
import { TopicMapper } from "../../domain/mappers";

export class TopicService {
  constructor(private readonly topicRepository: ITopicRepository, private readonly topicMapper: TopicMapper) {}

  public findAll = async (): Promise<TopicOutDTO[]> => {
    const topicsEntities = await this.topicRepository.findAll();
    return topicsEntities.map((entity) => this.topicMapper.entityToOutDto(entity));
  };

  public findByName = async (name: string): Promise<TopicOutDTO> => {
    const topicsEntity = await this.topicRepository.findOneByName(name);
    if (topicsEntity) return this.topicMapper.entityToOutDto(topicsEntity);
    else return { id: "", name: "" };
  };

  public addCampaingAxis = async (topicInDTO: TopicInDTO): Promise<TopicOutDTO> => {
    const topicEntity = this.topicMapper.inDtoToEntity(topicInDTO);
    const topicEntitySaved = await this.topicRepository.save(topicEntity);
    return this.topicMapper.entityToOutDto(topicEntitySaved);
  };
}
