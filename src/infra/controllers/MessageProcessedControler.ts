import { NextFunction, Request, Response } from "express";
import { MessageProcessedSercice } from "../../aplication/services/MessageProcessedService";
import { MessageProcessedInDTO } from "../../domain/dtos";

export class MessageProcessedControler {
  constructor(private readonly messageProcessedService: MessageProcessedSercice) {}
  public generateReposone = async (req: Request, res: Response) => {
    const { body: custommessageProcessedInDTOerDTO } = req;

    console.log("this.messageProcessedService");
    console.log(this.messageProcessedService);
    const responseMessagge = await this.messageProcessedService.generateReposone(custommessageProcessedInDTOerDTO);
    res.status(200).send(responseMessagge);
  };
}
