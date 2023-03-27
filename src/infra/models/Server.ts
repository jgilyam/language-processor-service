import express, { Application } from "express";
import messagesProcessedRoutes from "../routes/messagesProcessed.routes";
import cors from "cors";
import { db } from "../db/connection";
import { apiPaths } from "../routes/apiPaths";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = apiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || "8000";

    
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
    console.log("configured middelewares");
  }

  routes() {
    this.app.use(this.apiPaths.messagesProcessed, messagesProcessedRoutes);
    console.log("configured routes");
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("🚀 Server is running in port: " + this.port);
    });
  }
}

export default Server;
