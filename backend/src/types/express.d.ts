import "express";
import type { JwtPayload } from "./JwtPayload.ts";

declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload;
  }
}


export {};
