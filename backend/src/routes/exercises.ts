import express from "express"
import {authMiddleware} from "../middleware/authMiddleware.ts"
import prisma from "../lib/prisma.ts"

const exerciseRouter = express.Router();
exerciseRouter.use(express.json())

exerciseRouter.get("/exercises", authMiddleware, async (req,res)=>{
       const exercises = await prisma.exercise.findMany()
       res.json(exercises)
       if(Error){
          console.log(Error)
       }
}) 

export default exerciseRouter