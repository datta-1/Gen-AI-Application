const express=require("express");
const cookieParser=require("cookie-parser")


const app=express()
app.use(express.json())


app.use(cookieParser())
//require all routes
const authRoutes=require("./routes/auth.routes")

//using routes middleware
app.use("/api/auth",authRoutes)

module.exports=app;