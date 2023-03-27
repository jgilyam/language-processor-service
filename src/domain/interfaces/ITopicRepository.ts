import { TopicEntity } from "../entities";
import { IBaseRepository } from "./IBaseRepository";

export interface ITopicRepository extends IBaseRepository<TopicEntity> {
  findAllByName(name: string): Promise<TopicEntity>;
}
