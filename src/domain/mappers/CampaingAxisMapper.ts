import { IBaseMapper, TopicMapper } from ".";
import { CampaingAxisInDTO, CampaingAxisOutDTO, TopicOutDTO } from "../dtos";
import { CampaignAxisEntity } from "../entities";

export class CampaingAxisMapper implements IBaseMapper<CampaignAxisEntity, CampaingAxisInDTO, CampaingAxisOutDTO> {
  constructor(private readonly topicMapper: TopicMapper) {}

  entityToOutDto(entity: CampaignAxisEntity): CampaingAxisOutDTO {
    const campaingAxisOutDTO: CampaingAxisOutDTO = {
      id: entity.id as string,
      topic: this.topicMapper.entityToOutDto(entity.topic),
      proposal: entity.proposal,
    };
    return campaingAxisOutDTO;
  }
  inDtoToEntity(dto: CampaingAxisInDTO): CampaignAxisEntity {
    const campaignAxisEntity: CampaignAxisEntity = {
      topic: {
        name: dto.topicId,
      },
      proposal: dto.proposal,
    };
    return campaignAxisEntity;
  }
  campaingAxisInDTOAndTopicOutDTO(dto: CampaingAxisInDTO, topic: TopicOutDTO): CampaignAxisEntity {
    const campaignAxisEntity: CampaignAxisEntity = {
      topic: topic,
      proposal: dto.proposal,
    };
    return campaignAxisEntity;
  }
}
