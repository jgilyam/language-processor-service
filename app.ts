import dotenv from "dotenv";
import Server from "./src/infra/models/Server";

dotenv.config();

const server = new Server();

server.listen();
