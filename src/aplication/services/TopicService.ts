import { TopicOutDTO } from "../../domain/dtos";
import { ITopicRepository } from "../../domain/interfaces/";

export class TopicService {
  constructor(private readonly topicRepository: ITopicRepository) {}

  public findAllTopics = async (name?: string): Promise<TopicOutDTO[]> => {
    const topicsOutDTO: TopicOutDTO[] = [
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
    if (name) {
      return topicsOutDTO.filter((topic) => topic.name === name);
    } else {
      return topicsOutDTO;
    }
  };
}
