import express, { Application } from "express";
import messagesProcessedRoutes from "../routes/messagesProcessed.routes";
import topicsRoutes from "../routes/topic.routes";
import campaingAxis from "../routes/campaingAxis.routes";
import languageModel from "../routes/languageModel.routes";

import cors from "cors";
import { db } from "../db/connection";
import apiPaths from "../routes/apiPaths";
import { auth } from "../middlewares/auth";

require("dotenv").config();

class Server {
  private app: Application;
  private port: string;
  private apiPaths = apiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.dbConnection();
    this.middlewares();
    this.routes();
    this.setErrorHandler();
  }
  setErrorHandler() {}
  async dbConnection() {
    db.connect()
      .then(() => {
        console.log("Connection with db has been established successfully.");
      })
      .catch((error) => {
        console.error("Unable to connect to the database:", error);
      });
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(auth);
    console.log("configured middelewares");
  }

  routes() {
    this.app.use(this.apiPaths.messagesProcessed, messagesProcessedRoutes);
    this.app.use(this.apiPaths.campaingAxis, campaingAxis);
    this.app.use(this.apiPaths.topics, topicsRoutes);
    this.app.use(this.apiPaths.languageModel, languageModel);
    this.app.use("/", (req, res) => res.send("root"));
    console.log("configured routes");
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("🚀 Server is running in port: " + this.port);
    });
  }
}

export default Server;
