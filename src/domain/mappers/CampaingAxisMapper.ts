import { IBaseMapper, TopicMapper } from ".";
import { CampaingAxisInDTO, CampaingAxisOutDTO } from "../dtos";
import { CampaignAxisEntity } from "../entities";

export class CampaAxisMapper implements IBaseMapper<CampaignAxisEntity, CampaingAxisInDTO, CampaingAxisOutDTO> {
  constructor(private readonly topicMapper: TopicMapper) {}

  entityToOutDto(entity: CampaignAxisEntity): CampaingAxisOutDTO {
    const campaingAxisOutDTO: CampaingAxisOutDTO = {
      id: entity._id,
      topic: this.topicMapper.entityToOutDto(entity.topic),
      proposal: entity.proposal,
    };
    return campaingAxisOutDTO;
  }
  inDtoToEntity(dto: CampaingAxisInDTO): CampaignAxisEntity {
    throw new Error("Method not implemented.");
  }
}
