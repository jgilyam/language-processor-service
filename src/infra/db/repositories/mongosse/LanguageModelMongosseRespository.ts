import { LanguageModelEntity } from "../../../../domain/entities";
import { LanguageModelOperation } from "../../../../domain/enums";
import { ILanguageModelRepository } from "../../../../domain/interfaces";
import LanguageModel from "./models/LanguageModelSchema";

export class LanguageModelMongosseRespository implements ILanguageModelRepository {
  async findLanguageModelByOperation(languageModelOperation: LanguageModelOperation): Promise<LanguageModelEntity | null> {
    return await LanguageModel.findOne({ operation: languageModelOperation }).exec();
  }
  async save(entity: LanguageModelEntity): Promise<LanguageModelEntity> {
    const languageModel = new LanguageModel({
      ...entity,
    });
    return await languageModel.save();
  }
  async findAll(): Promise<LanguageModelEntity[]> {
    return await LanguageModel.find();
  }
  findById(id: string): Promise<LanguageModelEntity> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<LanguageModelEntity> {
    throw new Error("Method not implemented.");
  }
}
