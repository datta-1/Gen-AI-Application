const {Router}=require("express")
const authcontrollers=require("../controllers/auth.controllers")

const authRoutes=Router()
/**
@route POST /api/auth/register
@desc Register a new user
@access Public
*/
authRoutes.post("/register", authcontrollers.registerUsercontroller)

/**
*@route POST /api/auth/login
*@desc Login a user
*@access Public
*/
authRoutes.post("/login", authcontrollers.loginUsercontroller)

/**
*@route GET /api/auth/logout
*@desc clear the token cookie and blacklist the token
*@access Public
*/
authRoutes.get("/logout", authcontrollers.logoutUsercontroller)





module.exports=authRoutes
