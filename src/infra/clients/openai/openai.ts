import { Configuration, OpenAIApi } from "openai";

require("dotenv").config();

const configuration = new Configuration({
  organization: process.env.OPEN_AI_TEMPERATURE_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;
