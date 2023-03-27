import { Request, Response } from "express";
import { CampaingAxisService, TopicService } from "../../aplication/services";

export class TopicController {
  constructor(private readonly topicService: TopicService) {}
  public findAll = async (req: Request, res: Response) => {
    const topic = await this.topicService.findAll();
    res.status(200).send(topic);
  };

  public add = async (req: Request, res: Response) => {
    const { body: topicInDTO } = req;
    const topic = await this.topicService.addCampaingAxis(topicInDTO);
    res.status(200).send(topic);
  };
}
