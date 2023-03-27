import { LanguageModelEntity } from "../../../../domain/entities";
import { LanguageModelOperation } from "../../../../domain/enums";
import { ILanguageModelRepository } from "../../../../domain/interfaces";

export class LanguageModelRepositoryMock implements ILanguageModelRepository {
  findLanguageModelByOperation(ResponseGenerator: LanguageModelOperation): Promise<LanguageModelEntity> {
    throw new Error("Method not implemented.");
  }
  save(entity: LanguageModelEntity): Promise<LanguageModelEntity> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<LanguageModelEntity[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<LanguageModelEntity> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<LanguageModelEntity> {
    throw new Error("Method not implemented.");
  }
}
