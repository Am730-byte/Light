import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.ts";
import prisma from "../lib/prisma.ts";
import { getExerciseInstructions } from "../lib/exercise-instructions.ts";

const exerciseRouter = express.Router();
exerciseRouter.use(express.json());

exerciseRouter.get("/exercises", authMiddleware, async (req, res) => {
  try {
    const search = req.query.search;
    let exercises;

    if (typeof search === "string" && search.trim() !== "") {
      const normalizedSearch = search.toLowerCase().trim().replace(/\s+/g, "-");
      exercises = await prisma.exercise.findMany({
        where: {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              slug: {
                contains: normalizedSearch,
              },
            },
          ],
        },
      });
    } else {
      exercises = await prisma.exercise.findMany();
    }
    const exercisesWithInstructions = exercises.map((exercise) => ({
      ...exercise,
      instructions:
        exercise.instructions ??
        getExerciseInstructions({
          name: exercise.name,
          equipment: exercise.equipment,
          primarymuscle: exercise.primarymuscle,
          secondarymuscle: exercise.secondarymuscle,
        }),
    }));

    res.json(exercisesWithInstructions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch exercises" });
  }
});

export default exerciseRouter;
