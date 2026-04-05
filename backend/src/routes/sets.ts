import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.ts";
import prisma from "../lib/prisma.ts";

const setsRouter = express.Router();
setsRouter.use(express.json());

setsRouter.post("/sets", authMiddleware, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: "no user found" });
  }
  const userId = req.user.userId;
  if (!userId) {
    return res.status(401).json({ error: "No user id found" });
  }
  try {
    const sessionExerciseId = req.body.sessionExerciseId;
    const weight = Number(req.body.weight);
    const set = Number(req.body.set);
    const rep = Number(req.body.rep);

    if (typeof sessionExerciseId !== "string") {
      return res.status(400).json({ error: "sessionExerciseId is required" });
    }

    if (
      !Number.isFinite(weight) ||
      !Number.isInteger(set) ||
      !Number.isInteger(rep)
    ) {
      return res
        .status(400)
        .json({ error: "weight, set, and rep must be valid numbers" });
    }

    const sessionExercise = await prisma.sessionExercise.findUnique({
      where: {
        id: sessionExerciseId,
        session: {
          userId: userId,
        },
      },
    });

    if (!sessionExercise) {
      return res.status(403).json({ error: "Couldn't find session" });
    }

    const setData = await prisma.setLog.create({
      data: {
        sessionExerciseId,
        weight,
        set,
        rep,
      },
    });

    return res.status(201).json({ message: "created set data", setData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "couldn't create set data" });
  }
});

setsRouter.get("/sets/:sessionExerciseId", authMiddleware, async (req, res) => {
  const sessionExerciseId = req.params.sessionExerciseId;
  if (typeof sessionExerciseId !== "string") {
    return res.status(401).json({ error: "couldn't find session" });
  }
  if (!req.user) {
    return res.status(401).json({ error: "user not found" });
  }
  const userId = req.user.userId;
  if (!userId) {
    return res.status(401).json({ error: "user not found" });
  }
  try {
    const sessionExercise = await prisma.sessionExercise.findFirst({
      where: {
        id: sessionExerciseId,
        session: {
          userId,
        },
      },
    });
    if (!sessionExercise) {
      return res.status(403).json({ error: "session exercise not found" });
    }
    const sets = await prisma.setLog.findFirst({
      where: {
        sessionExerciseId,
      },
      orderBy: {
        set: "asc",
      },
    });
    return res.status(200).json({ sets });
  } catch (error) {
    return res.status(500).json({ error: "couldn't get the set data" });
  }
});

setsRouter.delete("/sets/:setId", authMiddleware, async (req, res) => {
  const setId = req.params.setId;
  if (typeof setId !== "string") {
    return res.status(400).json({ error: "Invalid set id" });
  }

  if (!req.user) {
    return res.status(401).json({ error: "user not found" });
  }

  try {
    const setLog = await prisma.setLog.findFirst({
      where: {
        id: setId,
        sessionExercise: {
          session: {
            userId: req.user.userId,
          },
        },
      },
    });

    if (!setLog) {
      return res.status(404).json({ error: "Set not found" });
    }

    await prisma.setLog.delete({
      where: {
        id: setId,
      },
    });

    return res.status(200).json({ message: "Set deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Could not delete set" });
  }
});

export default setsRouter;
