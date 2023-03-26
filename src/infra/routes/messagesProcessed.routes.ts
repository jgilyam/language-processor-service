import { Router } from "express";
import context from "./containers/MessageProcessedContainer";

const { messageProcessedController } = context;

const router = Router();

router.post("/", messageProcessedController.generateReposone);

export default router;
