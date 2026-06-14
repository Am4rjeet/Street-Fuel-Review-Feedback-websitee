import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  createReview,
  getReviewsByProduct,
  deleteReview,
  getAllReviews,
} from "../controllers/reviewController.js";

const router = express.Router();


router.get("/", getAllReviews);

router.post("/", createReview);

router.get("/:productId", getReviewsByProduct);

router.delete("/:id", authMiddleware, deleteReview);

export default router;