import { MessageProcessedEntity } from "../../../../domain/entities";
import { IMessageProcessedRepository } from "../../../../domain/interfaces";

export class MessageProcessedRepositoryMock implements IMessageProcessedRepository {
  save(entity: MessageProcessedEntity): Promise<MessageProcessedEntity> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<MessageProcessedEntity[] | null> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<MessageProcessedEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<MessageProcessedEntity | null> {
    throw new Error("Method not implemented.");
  }
}
