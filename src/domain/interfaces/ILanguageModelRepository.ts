import { MessageProcessedEntity } from "../entities";
import { IBaseRepository } from "./IBaseRepository";

export interface IMessageProcessedRepository
  extends IBaseRepository<MessageProcessedEntity> {}
