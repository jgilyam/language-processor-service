import { LanguageModelMapper, TopicMapper } from ".";
import { MessageProcessedInDTO, MessageProcessedOutDTO, TopicOutDTO } from "../dtos";
import { MessageProcessedEntity } from "../entities";
import { IBaseMapper } from "./IBaseMapper";

export class MessageProcessedMapper implements IBaseMapper<MessageProcessedEntity, MessageProcessedInDTO, MessageProcessedOutDTO> {
  constructor(private readonly topicMapper: TopicMapper, private readonly languageModelMapper: LanguageModelMapper) {}
  entityToOutDto(entity: MessageProcessedEntity): MessageProcessedOutDTO {
    const messageProcessedOutDTO: MessageProcessedOutDTO = {
      id: "",
      topic: this.topicMapper.entityToOutDto(entity.topic),
      messageIn: entity.messageIn,
      messageOut: entity.messageOut,
    };
    return messageProcessedOutDTO;
  }
  inDtoToEntity(dto: MessageProcessedInDTO): MessageProcessedEntity {
    throw new Error("Method not implemented.");
  }
  topicOutDTOAndMessageInMessageOutToMessageProcessedEntity(topicOutDTO: TopicOutDTO, messageIn: string, messageOut: string): MessageProcessedEntity {
    const messageProcessedEntity: MessageProcessedEntity = {
      id: "",
      topic: {
        id: topicOutDTO.id,
        name: topicOutDTO.name,
      },
      messageIn,
      messageOut,
    };
    return messageProcessedEntity;
  }
}
