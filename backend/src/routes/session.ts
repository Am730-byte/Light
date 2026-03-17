import express from "express"
import {authMiddleware} from "../middleware/authMiddleware.ts"
import prisma from "../lib/prisma.ts"

const sessionWorkoutRouter = express.Router();
sessionWorkoutRouter.use(express.json())

sessionWorkoutRouter.post("/workout", authMiddleware, async(req,res)=>{
          //res.json("hello this is serverRouter")
          if (!req.user) {
              return res.status(401).json({ error: "Unauthorized" });
          }
          const userId = req.user.userId 
          if(!userId){
            return res.status(401).json({error:"couldn't find user"})
          } 
          try {
          const {name} = req.body
          const {notes} =req.body

            const session = await prisma.workoutSession.create({
           data: {
            userId,
            name,
            notes
          }
          }) 
          return res.status(201).json(session)
        } catch (error){
          console.log(error)
          return res.status(500).json({ error: "failed to create session" });
        }
});

export default sessionWorkoutRouter
