import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  createFeedback,
  getAllFeedbacks,
  deleteFeedback,
} from "../controllers/feedbackController.js";

const router = express.Router();

router.post("/", createFeedback);

router.get(
  "/",
  authMiddleware,
  getAllFeedbacks
);

router.delete(
  "/:id",
  authMiddleware,
  deleteFeedback
);

export default router;