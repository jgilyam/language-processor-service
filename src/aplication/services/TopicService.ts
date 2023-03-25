import { TopicOutDTO } from "../../domain/dtos";
import { ITopicRepository } from "../../domain/interfaces/";

export class TopicService {
  constructor(private readonly topicRepository: ITopicRepository) {}

  public async findAllTopics(name?: string): Promise<TopicOutDTO[]> {
    throw new Error("metodo no implementado");
  }
}
