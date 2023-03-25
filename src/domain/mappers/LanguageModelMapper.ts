import { IBaseMapper } from ".";
import { LanguageModelInDTO, LanguageModelOutDTO } from "../dtos";
import { LanguageModelEntity } from "../entities";

export class LanguageModelMapper
  implements
    IBaseMapper<LanguageModelEntity, LanguageModelInDTO, LanguageModelOutDTO>
{
  entityToOutDto(entity: LanguageModelEntity): LanguageModelOutDTO {
    throw new Error("Method not implemented.");
  }
  inDtoToEntity(dto: LanguageModelInDTO): LanguageModelEntity {
    throw new Error("Method not implemented.");
  }
}
