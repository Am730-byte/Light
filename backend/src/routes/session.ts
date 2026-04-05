import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.ts";
import prisma from "../lib/prisma.ts";

const sessionWorkoutRouter = express.Router();
sessionWorkoutRouter.use(express.json());

sessionWorkoutRouter.get("/workout", authMiddleware, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: "Couldn't find user" });
  }

  try {
    const sessions = await prisma.workoutSession.findMany({
      where: {
        userId: req.user.userId,
      },
      orderBy: {
        date: "desc",
      },
    });

    return res.json(sessions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Couldn't get your sessions" });
  }
});

sessionWorkoutRouter.post("/workout", authMiddleware, async (req, res) => {
  //res.json("hello this is serverRouter")
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const userId = req.user.userId;
  if (!userId) {
    return res.status(401).json({ error: "couldn't find user" });
  }

  try {
    const { name } = req.body;
    const { notes } = req.body;

    const session = await prisma.workoutSession.create({
      data: {
        userId,
        name,
        notes,
      },
    });
    return res.status(201).json(session);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "failed to create session" });
  }
});

sessionWorkoutRouter.post(
  "/workout/:sessionId/exercise",
  authMiddleware,
  async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const userId = req.user.userId;
    if (!userId) {
      return res.status(401).json({ error: "couldn't find user" });
    }
    try {
      const sessionId = req.params.sessionId;
      if (typeof sessionId !== "string") {
        return res.status(404).json({ error: "Session not found" });
      }
      console.log(sessionId);
      const exerciseId = req.body.exerciseId;
      if (!exerciseId) {
        return res.status(404).json({ error: "No exercise found" });
      }

      const session = await prisma.workoutSession.findFirst({
        where: {
          id: sessionId,
          userId: req.user.userId,
        },
      });

      if (!session) {
        return res.status(403).json({ error: "couldn't find workout session" });
      }

      const sessionwork = await prisma.sessionExercise.create({
        data: {
          sessionId,
          exerciseId,
        },
      });

      if (!sessionwork) {
        return res.status(403).json({ error: "Couldn't authenticate user" });
      }

      return res
        .status(201)
        .json({ message: "exercise added to the session", sessionwork });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "No session found" });
    }
  },
);

sessionWorkoutRouter.delete(
  "/workout/:sessionId/exercise/:sessionExerciseId",
  authMiddleware,
  async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { sessionId, sessionExerciseId } = req.params;
    if (typeof sessionId !== "string" || typeof sessionExerciseId !== "string") {
      return res.status(400).json({ error: "Invalid session exercise" });
    }

    try {
      const sessionExercise = await prisma.sessionExercise.findFirst({
        where: {
          id: sessionExerciseId,
          sessionId,
          session: {
            userId: req.user.userId,
          },
        },
      });

      if (!sessionExercise) {
        return res.status(404).json({ error: "Session exercise not found" });
      }

      await prisma.setLog.deleteMany({
        where: {
          sessionExerciseId,
        },
      });

      await prisma.sessionExercise.delete({
        where: {
          id: sessionExerciseId,
        },
      });

      return res.status(200).json({ message: "Exercise removed from session" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Could not delete exercise" });
    }
  },
);

sessionWorkoutRouter.get(
  "/workout/:sessionId",
  authMiddleware,
  async (req, res) => {
    const sessionId = req.params.sessionId;
    if (typeof sessionId !== "string") {
      return res.status(400).json({ error: "Invalid sessionId" });
    }
    if (!req.user) {
      return res.status(401).json({ error: "Couldn't find user" });
    }
    try {
      const session = await prisma.workoutSession.findFirst({
        where: {
          id: sessionId,
          userId: req.user.userId,
        },
        include: {
          exercises: {
            include: {
              exercise: true,
              sets: true,
            },
          },
        },
      });

      return res.json(session);
    } catch (error) {
      return res
        .status(403)
        .json({ error: "Couldn't get the session details" });
    }
  },
);

sessionWorkoutRouter.delete("/workout/:sessionId", authMiddleware, async (req, res) => {
  const sessionId = req.params.sessionId;
  if (typeof sessionId !== "string") {
    return res.status(400).json({ error: "Invalid sessionId" });
  }

  if (!req.user) {
    return res.status(401).json({ error: "Couldn't find user" });
  }

  try {
    const session = await prisma.workoutSession.findFirst({
      where: {
        id: sessionId,
        userId: req.user.userId,
      },
      include: {
        exercises: true,
      },
    });

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    const sessionExerciseIds = session.exercises.map((item) => item.id);

    await prisma.setLog.deleteMany({
      where: {
        sessionExerciseId: {
          in: sessionExerciseIds,
        },
      },
    });

    await prisma.sessionExercise.deleteMany({
      where: {
        sessionId,
      },
    });

    await prisma.workoutSession.delete({
      where: {
        id: sessionId,
      },
    });

    return res.status(200).json({ message: "Session deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Could not delete session" });
  }
});

export default sessionWorkoutRouter;
