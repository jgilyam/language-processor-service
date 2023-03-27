import { Router } from "express";
import context from "./apiContext";

const { campaignAxisController } = context;

const router = Router();

router.get("/", campaignAxisController.findAll);
router.post("/", campaignAxisController.add);

export default router;
