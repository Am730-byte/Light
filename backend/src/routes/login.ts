import express from "express"
import { loginSchema } from "../schema/zodSchema.ts";
import prisma from "../lib/prisma.ts"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const loginRouter = express.Router();
loginRouter.use(express.json())

loginRouter.post("/login", async (req,res)=>{
const user = loginSchema.safeParse(req.body)

if(!user.success){
    return res.status(401).json({error: "Something went wrong"})
}

try {
    const {email, password} = user.data;
    const loggedmail = await prisma.user.findUnique({
        where: {
            email
        }
    })
    if(!loggedmail){
        return res.status(400).json({message: "Try signing up"})
    } else {
        const passwordmatch = await bcrypt.compare(password, loggedmail.password)
        if(!passwordmatch) {
            return res.status(401).json({error: "Wrong Credentials"})
        } else {
            const secret = process.env.SECRETKEY;
            if(!secret){
                return res.status(403).json({error:"No key found"})
            }
            const token = jwt.sign(
                {userId: loggedmail.id},
                secret,
                {expiresIn:"1h"}
            )
         
            const days = 15;
            res.cookie("token",token,{
                httpOnly: true,
                maxAge: days*24*60*60*1000,
                secure:false,
                sameSite:"strict",
                path:"/"
            })
            
            return res.status(200).json(
                {
                    message:"user logged in successfully",
                    id:loggedmail.id,
                    email: loggedmail.email,
                    userName: loggedmail.userName
                }
            )
        }
    }

} catch (error) {
    return res.status(401).json({error:"Try signing up"})
}
})

export default loginRouter