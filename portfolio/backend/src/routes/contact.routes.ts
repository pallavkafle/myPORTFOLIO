import { Router } from "express";
import { contactController } from "../controllers/contactController";
import { contactRateLimiter } from "../middleware/rateLimiter";

const router = Router();

router.post("/", contactRateLimiter, contactController);

export default router;
