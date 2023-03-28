import { ChatCompletition, LanguageModelEntity } from "../entities";
import { LanguageModelOperation } from "../enums";
import { IBaseRepository } from "./IBaseRepository";

export interface ILanguageModelRepository extends IBaseRepository<LanguageModelEntity> {
  findLanguageModelByOperation(ResponseGenerator: LanguageModelOperation): Promise<LanguageModelEntity | null>;
}
