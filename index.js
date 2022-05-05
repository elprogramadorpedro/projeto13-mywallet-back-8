import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import chalk from "chalk"

import { postSignIn, postSignUp } from "./controllers/loginControllers.js"
import { postBank, getBank } from "./controllers/bankControllers.js"

dotenv.config()

// create express
const app = express()
app.use(express.json())
app.use(cors())

// Sign in and Sign up
app.post("/signin", postSignIn)
app.post("/signup", postSignUp)

// Bank
app.get("/bank", getBank)
app.post("/bank", postBank)

// port
app.listen(process.env.EXPRESS_PORT, () => console.log(chalk.bold.greenBright("Express running")))
