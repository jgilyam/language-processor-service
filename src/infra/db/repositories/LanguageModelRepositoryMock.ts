import { LanguageModelEntity } from "../../../domain/entities";
import { ILanguageModelRepository } from "../../../domain/interfaces";

export class LanguageModelRepositoryMock implements ILanguageModelRepository {
  save(entity: LanguageModelEntity): Promise<LanguageModelEntity> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<LanguageModelEntity[] | null> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<LanguageModelEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<LanguageModelEntity | null> {
    throw new Error("Method not implemented.");
  }
}
