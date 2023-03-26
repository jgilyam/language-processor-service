import { TopicEntity } from "../../../domain/entities";
import { ITopicRepository } from "../../../domain/interfaces";

export class TopicRepositoryMock implements ITopicRepository {
  save(entity: TopicEntity): Promise<TopicEntity> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<TopicEntity[] | null> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<TopicEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<TopicEntity | null> {
    throw new Error("Method not implemented.");
  }
}
