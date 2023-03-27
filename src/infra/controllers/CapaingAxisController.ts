import { Request, Response } from "express";
import { CampaingAxisService } from "../../aplication/services";

export class CampaignAxisController {
  constructor(private readonly campaingAxisService: CampaingAxisService) {}
  public findAll = async (req: Request, res: Response) => {
    const campaingAxis = await this.campaingAxisService.findAll();
    res.status(200).send(campaingAxis);
  };

  public add = async (req: Request, res: Response) => {
    const { body: campaingAxisInDTO } = req;
    const campaingAxis = await this.campaingAxisService.addCampaingAxis(campaingAxisInDTO);
    res.status(200).send(campaingAxis);
  };
}
