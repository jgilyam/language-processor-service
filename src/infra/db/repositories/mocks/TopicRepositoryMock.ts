import { TopicEntity } from "../../../../domain/entities";
import { ITopicRepository } from "../../../../domain/interfaces";

export class TopicRepositoryMock implements ITopicRepository {
  async findOneByName(name: string): Promise<TopicEntity> {
    const topicEntity: TopicEntity[] = [
      {
        _id: "1",
        name: "Seguridad",
      },
      {
        _id: "2",
        name: "Salud",
      },
      {
        _id: "3",
        name: "Infraestructura",
      },
      {
        _id: "4",
        name: "Educación",
      },
      {
        _id: "5",
        name: "Otros",
      },
    ];

    return topicEntity.filter((topic) => topic.name === name)[0];
  }
  save(entity: TopicEntity): Promise<TopicEntity> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<TopicEntity[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<TopicEntity> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<TopicEntity> {
    throw new Error("Method not implemented.");
  }
}
