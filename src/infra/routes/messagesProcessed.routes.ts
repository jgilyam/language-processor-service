import { Router } from "express";
import context from "./apiContext";

const { messageProcessedController } = context;

const router = Router();

router.post("/", messageProcessedController.generateReposone);

export default router;
