import { Configuration, OpenAIApi } from "openai";
require('dotenv').config()

const configuration = new Configuration({
    organization: "org-5GJn6o1rNF8UFXMjP8iq9kJ7",
    apiKey: process.env.OPEN_IA_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log(openai);

const test = async ()=>{
    const response = await openai.listEngines();
    console.log(response);
}

test();

openai.createChatCompletion



