import "express";
import { JwtPayload } from "./JwtPayload.ts";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        email?: string;
        
      };
    }
  }
}

export {};