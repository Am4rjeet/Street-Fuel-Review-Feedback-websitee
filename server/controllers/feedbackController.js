import Feedback from "../models/Feedback.js";


export const createFeedback = async (req, res) => {
  try {
    const { name, mobile, message } =
      req.body;

    if (
      !name ||
      !mobile ||
      !message
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const feedback =
      await Feedback.create({
        name,
        mobile,
        message,
      });

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllFeedbacks =
  async (req, res) => {
    try {
      const feedbacks =
        await Feedback.find().sort({
          createdAt: -1,
        });

      res.status(200).json(
        feedbacks
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


export const deleteFeedback =
  async (req, res) => {
    try {
      const feedback =
        await Feedback.findByIdAndDelete(
          req.params.id
        );

      if (!feedback) {
        return res.status(404).json({
          message:
            "Feedback not found",
        });
      }

      res.status(200).json({
        message:
          "Feedback deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };