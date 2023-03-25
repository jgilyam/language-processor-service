import { NextFunction, Request, Response } from "express";
import { MessageProcessedSercice } from "../../aplication/services/MessageProcessedService";
import { MessageProcessedInDTO } from "../../domain/dtos";

export class MessageProcessedControler {
  constructor(
    private readonly messageProcessedService: MessageProcessedSercice
  ) {}
  public async generateReposone(req: Request, res: Response) {
    const { body: custommessageProcessedInDTOerDTO } = req;
    const responseMessagge =
      await this.messageProcessedService.generateReposone(
        custommessageProcessedInDTOerDTO
      );
    res.status(200).send(responseMessagge);
  }
}
