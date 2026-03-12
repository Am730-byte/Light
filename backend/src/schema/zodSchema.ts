import * as z from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({});



export const signupSchema = z.object({
    name: z.string().min(3).max(20),
    userName: z.string().min(3),
    email: z.email(),
    password :z.string().max(12)
})

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().max(12)

})

export default prisma;