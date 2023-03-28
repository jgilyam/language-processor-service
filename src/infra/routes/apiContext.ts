import { TopicService, LanguageModelService, CampaingAxisService, MessageProcessedSercice } from "../../aplication/services";
import { LanguageModelMapper, TopicMapper, MessageProcessedMapper, CampaingAxisMapper } from "../../domain/mappers";
import { TextProcessorOpenAI } from "../clients/TextProcessorOpenAI";
import { CampaignAxisController } from "../controllers/CapaingAxisController";
import { MessageProcessedControler } from "../controllers/MessageProcessedControler";
import { TopicController } from "../controllers/TopicController";
import {
  MessageProcessedRepositoryMock,
  CampaingAxisRepositoryMock,
  LanguageModelRepositoryMock,
  TopicRepositoryMock,
} from "../db/repositories/mocks";
import { CampaingAxisMongosseRepository } from "../db/repositories/mongosse";
import { TopicMongosseReposritory } from "../db/repositories/mongosse/TopicMongosseReposritory";

//Mock repositories
const messageProcessedRepository = new MessageProcessedRepositoryMock();
const campaingAxisRepositoryMock = new CampaingAxisRepositoryMock();
const languageModelRepositoryMock = new LanguageModelRepositoryMock();
const topicRepositoryMock = new TopicRepositoryMock();
//Mongosse repositories
const campaingAxisMongosseRepository = new CampaingAxisMongosseRepository();
const topicMongosseReposritory = new TopicMongosseReposritory();

//mappers
const languageModelMapper = new LanguageModelMapper();
const topicMapper = new TopicMapper();
const messageProcessedMapper = new MessageProcessedMapper(topicMapper, languageModelMapper);
const campaingAxisMapper = new CampaingAxisMapper(topicMapper);

//clients
const textProcessor = new TextProcessorOpenAI();

//servicios
const topicService = new TopicService(topicMongosseReposritory, topicMapper);
const languageModelService = new LanguageModelService(languageModelRepositoryMock);
const campaignAxisService = new CampaingAxisService(campaingAxisMongosseRepository, campaingAxisMapper, topicService);
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
const campaignAxisController = new CampaignAxisController(campaignAxisService);
const topicController = new TopicController(topicService);
const context = {
  messageProcessedController,
  campaignAxisController,
  topicController,
};
export default context;
