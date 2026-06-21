const express=require("express");
const cookieParser=require("cookie-parser")
const cors=require("cors")


const app=express()
app.use(express.json())


app.use(cookieParser())
//require all routes
const authRoutes=require("./routes/auth.routes")

//using cors middleware
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

//using routes middleware
app.use("/api/auth",authRoutes)

module.exports=app;