import { Configuration, OpenAIApi } from "openai";

require("dotenv").config();

const configuration = new Configuration({
  organization: "org-ZD87XnGIHIUzIPfLnH4WfSgr",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;
