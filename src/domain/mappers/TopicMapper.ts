import { IBaseMapper } from ".";
import { TopicInDTO, TopicOutDTO } from "../dtos";
import { TopicEntity } from "../entities";

export class TopicMapper
  implements IBaseMapper<TopicEntity, TopicInDTO, TopicOutDTO>
{
  entityToOutDto(entity: TopicEntity): TopicOutDTO {
    const topicOutDTO: TopicOutDTO = {
      id: entity._id,
      name: entity.name,
    };
    return topicOutDTO;
  }
  inDtoToEntity(dto: TopicInDTO): TopicEntity {
    throw new Error("Method not implemented.");
  }
}
