import { TopicEntity } from "../entities";
import { IBaseRepository } from "./IBaseRepository";

export interface ITopicRepository extends IBaseRepository<TopicEntity> {
  findOneByName(name: string): Promise<TopicEntity | null>;
}
