import express from "express"
import {authMiddleware} from "../middleware/authMiddleware"


const exerciseRouter = express.Router();
exerciseRouter.use(express.json())

exerciseRouter.post("/exercises", authMiddleware, async (req,res)=>{

})