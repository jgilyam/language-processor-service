import { TopicEntity } from "../../../../domain/entities";
import { ITopicRepository } from "../../../../domain/interfaces";
import Topic from "./models/TopicSchema";

export class TopicMongosseReposritory implements ITopicRepository {
  async findOneByName(name: string): Promise<TopicEntity | null> {
    return await Topic.findOne({ name: name }).exec();
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
  async findById(id: string): Promise<TopicEntity> {
    return (await Topic.findById(id).exec()) as TopicEntity;
  }
  deleteById(id: number): Promise<TopicEntity> {
    throw new Error("Method not implemented.");
  }
}
