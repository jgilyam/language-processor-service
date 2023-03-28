import { IBaseMapper } from ".";
import { LanguageModelInDTO, LanguageModelOutDTO } from "../dtos";
import { LanguageModelEntity } from "../entities";

export class LanguageModelMapper
  implements
    IBaseMapper<LanguageModelEntity, LanguageModelInDTO, LanguageModelOutDTO>
{
  entityToOutDto(entity: LanguageModelEntity): LanguageModelOutDTO {
    const languageModelOutDTO: LanguageModelOutDTO = {
      id: "",
      name: entity.name,
      description: entity.description,
      chatCompletition: {
        model: entity.chatCompletition.model,
        messages: entity.chatCompletition.messages,
      },
      operation: entity.operation,
    };
    return languageModelOutDTO;
  }
  inDtoToEntity(dto: LanguageModelInDTO): LanguageModelEntity {
    const languageModelEntity: LanguageModelEntity = {
      id: "",
      name: dto.name,
      description: dto.description,
      chatCompletition: {
        model: dto.chatCompletition.model,
        messages: dto.chatCompletition.messages,
      },
      operation: dto.operation,
    };
    return languageModelEntity;
  }
}
