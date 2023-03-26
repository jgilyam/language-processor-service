import { CampaingAxisService, LanguageModelService, MessageProcessedSercice, TopicService } from "../../../aplication/services";
import { MessageProcessedMapper } from "../../../domain/mappers";
import { MessageProcessedControler } from "../../controllers/MessageProcessedControler";

const messageProcessedRepository = new IMessageProcessedRepository();
const textProcessor = new ITextProcessor();
const topicService = new TopicService();
const languageModelService = new LanguageModelService();
const campaignAxisService = new CampaingAxisService();
const messageProcessedMapper = new MessageProcessedMapper();

const messageProcessedSercice = new MessageProcessedSercice();
const messageProcessedController = new MessageProcessedControler(messageProcessedSercice);

const context = {
  messageProcessedController,
};

export default context;
