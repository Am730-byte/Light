import express from "express"
import { authMiddleware } from "../middleware/authMiddleware.ts"
import prisma  from "../lib/prisma.ts"

const workoutRouter = express.Router();
workoutRouter.use(express.json());

workoutRouter.post("/workout", authMiddleware, async(req,res)=>{
    
    if (!req.user) {
     return res.status(401).json({ error: "Unauthorized" });
    }
    const userId = req.user?.userId
    if(!userId){
        return res.status(401).json({error: "maa chud gayi bc"})
    }
     const {notes} = req.body
     const exerciseId = req.body
      prisma.workoutPlan.create({
       data:
        {
            notes,
            userId,
            exerciseId,

        }
    })
})
