import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.ts";
import prisma from "../lib/prisma.ts";

const profileRouter = express.Router();
profileRouter.use(express.json());

profileRouter.get("/me", authMiddleware, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.userId,
      },
      include: {
        workout: {
          include: {
            exercises: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const totalSessions = user.workout.length;
    const totalExercises = user.workout.reduce(
      (count, session) => count + session.exercises.length,
      0,
    );

    return res.json({
      id: user.id,
      name: user.name,
      userName: user.userName,
      email: user.email,
      createdAt: user.createdAt,
      role: user.role,
      type: user.type,
      totalSessions,
      totalExercises,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Could not fetch profile" });
  }
});

export default profileRouter;
