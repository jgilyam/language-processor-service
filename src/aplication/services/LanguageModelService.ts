import { LanguageModelOutDTO } from "../../domain/dtos";
import { LanguageModelOperation } from "../../domain/enums";
import { ILanguageModelRepository } from "../../domain/interfaces";

export class LanguageModelService {
  constructor(
    private readonly languageModelRepository: ILanguageModelRepository
  ) {}

  public async findAllLanguageModels(
    operation?: LanguageModelOperation
  ): Promise<LanguageModelOutDTO[]> {
    throw new Error("metodo no implementado");
  }

  public async findLanguageModelByOperation(
    operation?: LanguageModelOperation
  ): Promise<LanguageModelOutDTO> {
    throw new Error("metodo no implementado");
  }
}
