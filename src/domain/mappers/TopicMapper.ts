import { IBaseMapper } from ".";
import { TopicInDTO, TopicOutDTO } from "../dtos";
import { TopicEntity } from "../entities";

export class TopicMapper
  implements IBaseMapper<TopicEntity, TopicInDTO, TopicOutDTO>
{
  entityToOutDto(entity: TopicEntity): TopicOutDTO {
    const topicOutDTO: TopicOutDTO = {
      id: entity.id as string,
      name: entity.name,
    };
    return topicOutDTO;
  }
  inDtoToEntity(dto: TopicInDTO): TopicEntity {
    const topicEntity: TopicEntity = {
      
      name: dto.name,
    };
    return topicEntity;
  }
}
