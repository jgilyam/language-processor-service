import { ITopicRepository } from "../../domain/interfaces/";

export class TopicService {
  constructor(private readonly topicRepository: ITopicRepository) {}

  public async findAllTopics() {
    return this.topicRepository.findAll();
  }
}
