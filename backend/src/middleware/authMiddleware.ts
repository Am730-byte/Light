import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import type { JwtPayload } from "../types/JwtPayload.ts"

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
     const secret = process.env.SECRETKEY;
    if (!secret) {
        return res.status(500).json({ error: "Server configuration error" });
    }
    const authToken = req.cookies.token
    if (!authToken) {
        return res.status(401).json({ error: "No token provided" })
    }
    try {
        const decoded = jwt.verify(
            authToken,
            secret,
        ) as JwtPayload

        req.user = decoded;

        next();
    }
    catch (error) {
         return res.status(401).json({success:false, message: "Invalid token"})
    }
}