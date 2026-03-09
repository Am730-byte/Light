import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import loginRouter from "./routes/login";
import signupRouter from "./routes/signup"
import dotenv from "dotenv"

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
const PORT = Number(process.env.PORT) || 5174


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})