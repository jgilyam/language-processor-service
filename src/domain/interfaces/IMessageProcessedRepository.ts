import { MessagesProcessedEntity } from "../entities";
import { IBaseRepository } from "./IBaseRepository";

export interface IMessageProcessedRepository
  extends IBaseRepository<MessagesProcessedEntity> {}
