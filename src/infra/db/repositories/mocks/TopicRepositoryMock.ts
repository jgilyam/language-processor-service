import { TopicEntity } from "../../../../domain/entities";
import { ITopicRepository } from "../../../../domain/interfaces";

export class TopicRepositoryMock implements ITopicRepository {
  async findOneByName(name: string): Promise<TopicEntity> {
    const topicEntity: TopicEntity[] = [
      {
        id: "1",
        name: "Seguridad",
      },
      {
        id: "2",
        name: "Salud",
      },
      {
        id: "3",
        name: "Infraestructura",
      },
      {
        id: "4",
        name: "Educación",
      },
      {
        id: "5",
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
