import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import loginRouter from "./routes/login.ts";
import signupRouter from "./routes/signup.ts"
import dotenv from "dotenv"
import exerciseRouter from "./routes/exercises.ts";
import sessionWorkoutRouter from "./routes/session.ts";
import setsRouter from "./routes/sets.ts";
import profileRouter from "./routes/profile.ts";

dotenv.config()
const app = express(); 
const isProduction = process.env.NODE_ENV === "production";

function normalizeOrigin(origin: string) {
  return origin.replace(/\/+$/, "");
}

function isAllowedOrigin(origin: string) {
  const normalizedOrigin = normalizeOrigin(origin);
  const configuredFrontendOrigin = process.env.FRONTEND_URL
    ? normalizeOrigin(process.env.FRONTEND_URL)
    : null;

  if (!configuredFrontendOrigin && !isProduction) {
    return normalizedOrigin === "http://localhost:3000";
  }

  return (
    normalizedOrigin === configuredFrontendOrigin ||
    (!isProduction && normalizedOrigin === "http://localhost:3000")
  );
}

app.set("trust proxy", 1);
app.use(express.json())
app.use(cookieParser())


app.use(cors({
    origin: (origin, callback) => {
        if (!origin || isAllowedOrigin(origin)) {
            return callback(null, true);
        }

        return callback(null, false);
    },
    credentials: true
}));

app.get("/", (req,res)=>{
    res.status(200).json({message: "Server is working"})
})

app.use("/api/login", loginRouter);
app.use("/api/signup", signupRouter)
app.use('/api/exercise',exerciseRouter)
app.use("/api/session",sessionWorkoutRouter)
app.use("/api/sets", setsRouter)
app.use("/api/profile", profileRouter)

const PORT = Number(process.env.PORT) || 5174

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
