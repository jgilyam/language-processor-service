import { Router } from "express";
import context from "./apiContext";

const { laguageModelController } = context;

const router = Router();

router.get("/", laguageModelController.findAll);
router.post("/", laguageModelController.add);

export default router;
