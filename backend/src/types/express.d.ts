import "express";
import { JwtPayload } from "./JwtPayload";

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