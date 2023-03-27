import { Router } from "express";
import context from "./apiContext";

const { topicController } = context;

const router = Router();

router.get("/", topicController.findAll);
router.post("/", topicController.add);

export default router;
