import { TopicService, LanguageModelService, CampaingAxisService, MessageProcessedSercice } from "../../aplication/services";
import { LanguageModelMapper, TopicMapper, MessageProcessedMapper } from "../../domain/mappers";
import { TextProcessorOpenAI } from "../clients/TextProcessorOpenAI";
import { MessageProcessedControler } from "../controllers/MessageProcessedControler";
import { MessageProcessedRepositoryMock, CampaingAxisRepositoryMock, LanguageModelRepositoryMock, TopicRepositoryMock } from "../db/repositories";

//repositories
const messageProcessedRepository = new MessageProcessedRepositoryMock();
const campaingAxisRepositoryMock = new CampaingAxisRepositoryMock();
const languageModelRepositoryMock = new LanguageModelRepositoryMock();
const topicRepositoryMock = new TopicRepositoryMock();

//mappers
const languageModelMapper = new LanguageModelMapper();
const topicMapper = new TopicMapper();
const messageProcessedMapper = new MessageProcessedMapper(topicMapper, languageModelMapper);

//clients
const textProcessor = new TextProcessorOpenAI();

//servicios
const topicService = new TopicService(topicRepositoryMock);
const languageModelService = new LanguageModelService(languageModelRepositoryMock);
const campaignAxisService = new CampaingAxisService(campaingAxisRepositoryMock);
const messageProcessedSercice = new MessageProcessedSercice(
  messageProcessedRepository,
  textProcessor,
  topicService,
  languageModelService,
  campaignAxisService,
  messageProcessedMapper
);

//controllers
const messageProcessedController = new MessageProcessedControler(messageProcessedSercice);

const context = {
  messageProcessedController,
};
export default context;
