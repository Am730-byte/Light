import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import loginRouter from "./routes/login.ts";
import signupRouter from "./routes/signup.ts"
import dotenv from "dotenv"
import exerciseRouter from "./routes/exercises.ts";
import sessionWorkoutRouter from "./routes/session.ts";
import setsRouter from "./routes/sets.ts";

dotenv.config()
const app = express();
app.use(express.json())
app.use(cookieParser())


app.use(cors({
    origin: "http://localhost:3000",
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
const PORT = Number(process.env.PORT) || 5174

console.log(process.env.SECRETKEY)

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

console.log(process.env.DATABASE_URL)