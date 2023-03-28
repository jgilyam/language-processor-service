import { TopicService, LanguageModelService, CampaingAxisService, MessageProcessedSercice } from "../../aplication/services";
import { LanguageModelMapper, TopicMapper, MessageProcessedMapper, CampaingAxisMapper } from "../../domain/mappers";
import { TextProcessorMock } from "../clients/TextProcessorMock";
import { TextProcessorOpenAI } from "../clients/TextProcessorOpenAI";
import { CampaignAxisController } from "../controllers/CapaingAxisController";
import { LanguageModelController } from "../controllers/LanguageModelController";
import { MessageProcessedControler } from "../controllers/MessageProcessedControler";
import { TopicController } from "../controllers/TopicController";
import {
  MessageProcessedRepositoryMock,
  CampaingAxisRepositoryMock,
  LanguageModelRepositoryMock,
  TopicRepositoryMock,
} from "../db/repositories/mocks";
import { CampaingAxisMongosseRepository } from "../db/repositories/mongosse";
import { LanguageModelMongosseRespository } from "../db/repositories/mongosse/LanguageModelMongosseRespository";
import { TopicMongosseReposritory } from "../db/repositories/mongosse/TopicMongosseReposritory";

//Mock repositories
const messageProcessedRepository = new MessageProcessedRepositoryMock();
const campaingAxisRepositoryMock = new CampaingAxisRepositoryMock();
const languageModelRepositoryMock = new LanguageModelRepositoryMock();
const topicRepositoryMock = new TopicRepositoryMock();
//Mongosse repositories
const campaingAxisMongosseRepository = new CampaingAxisMongosseRepository();
const topicMongosseReposritory = new TopicMongosseReposritory();
const languageModelMongosseRespository = new LanguageModelMongosseRespository();

//mappers
const languageModelMapper = new LanguageModelMapper();
const topicMapper = new TopicMapper();
const messageProcessedMapper = new MessageProcessedMapper(topicMapper, languageModelMapper);
const campaingAxisMapper = new CampaingAxisMapper(topicMapper);

//clients
const textProcessor = new TextProcessorOpenAI();
//mockClient
const textProcessorMock = new TextProcessorMock();

//servicios
const topicService = new TopicService(topicMongosseReposritory, topicMapper);
const languageModelService = new LanguageModelService(languageModelMongosseRespository, languageModelMapper);
const campaignAxisService = new CampaingAxisService(campaingAxisMongosseRepository, campaingAxisMapper, topicService);
const messageProcessedSercice = new MessageProcessedSercice(
  messageProcessedRepository,
  textProcessorMock,
  topicService,
  languageModelService,
  campaignAxisService,
  messageProcessedMapper
);

//controllers
const messageProcessedController = new MessageProcessedControler(messageProcessedSercice);
const campaignAxisController = new CampaignAxisController(campaignAxisService);
const topicController = new TopicController(topicService);
const laguageModelController = new LanguageModelController(languageModelService);
const context = {
  messageProcessedController,
  campaignAxisController,
  topicController,
  laguageModelController,
};
export default context;
