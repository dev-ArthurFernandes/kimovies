import 'express-async-errors';
import express, { Application } from "express";
import { handleError } from "./error";
import {
    categoryRouter,
    loginRouter,
    realEstateRouter,
    schedulesRouter,
    userRouter
} from "./routes";


const app: Application = express()

app.use(express.json())

app.use('/users', userRouter)
app.use('/login', loginRouter)
app.use('/realEstate', realEstateRouter)
app.use('/categories', categoryRouter)
app.use('/schedules', schedulesRouter)

app.use(handleError)

export default app