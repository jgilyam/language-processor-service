import { Request, Response } from "express";
import { LanguageModelService } from "../../aplication/services";

export class LanguageModelController {
  constructor(private readonly languageModelService: LanguageModelService) {}
  public findAll = async (req: Request, res: Response) => {
    const languageModels = await this.languageModelService.findAllLanguageModels();
    res.status(200).send(languageModels);
  };

  public add = async (req: Request, res: Response) => {
    const { body: languageModelInDTO } = req;
    const languageModel = await this.languageModelService.addLanguageModel(languageModelInDTO);
    res.status(200).send(languageModel);
  };
}
