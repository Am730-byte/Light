import express from "express";
import bcrypt from "bcrypt"
import { signupSchema } from "../schema/zodSchema";
import prisma from "../schema/zodSchema";
import jwt from "jsonwebtoken"


const signupRouter = express.Router();
signupRouter.use(express.json())


signupRouter.post("/signup", async (req, res) => {

    const user = signupSchema.safeParse(req.body);
    
    if(!user.success) {
        return res.status(400).json({error: "Something went wrong"})
    }

    try {
        const {name, userName, email, password} = user.data;
        const foundemail = await prisma.user.findUnique ({
            where: {
                email
            }
        })
        if(foundemail) {
            return res.status(409).json({error: "User already exists"})
        } else {
            const hashpass = await bcrypt.hash(password, 12)
            
            const newUser = await prisma.user.create ({
                data: {
                    name,
                    userName,
                    email,
                    password: hashpass
                }
            })
            const secret = process.env.SECRETKEY
            if(!secret){
                return res.status(500).json({error: "Server Error"})
            }
            const token = jwt.sign(
                {userId: newUser.id},
                secret,
                {expiresIn:"1h"}
            )
            
            const days = 15
            res.cookie("token", token,{
                httpOnly:true,
                maxAge: days*24*60*60*1000,
                sameSite:"strict",
                path:"/",
                secure:false
            })
            return res.status(201).json({ message: "User Created"})

        }
    } catch (error) {
        return res.status(500).json({error: "Try logging in again"})
    }
    

})

export default signupRouter;

