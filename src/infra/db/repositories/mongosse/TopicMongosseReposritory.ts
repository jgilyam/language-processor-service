import { TopicEntity } from "../../../../domain/entities";
import { ITopicRepository } from "../../../../domain/interfaces";
import Topic from "./models/TopicSchema";

export class TopicMongosseReposritory implements ITopicRepository {
  findAllByName(name: string): Promise<TopicEntity> {
    throw new Error("Method not implemented.");
  }
  async save(entity: TopicEntity): Promise<TopicEntity> {
    const topic = new Topic({
      ...entity,
    });
    return await topic.save();
  }
  async findAll(): Promise<TopicEntity[]> {
    return await Topic.find();
  }
  findById(id: number): Promise<TopicEntity> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<TopicEntity> {
    throw new Error("Method not implemented.");
  }
}
