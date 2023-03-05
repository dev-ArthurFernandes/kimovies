import 'express-async-error';
import express, { Application, json } from "express";
import { handleError } from "./error";
import {
    categoryRouter,
    loginRouter,
    realEstateRouter,
    schedulesRouter,
    userRouter
} from "./routes";


const app: Application = express()

app.use(json())

app.use('/users', userRouter)
app.use('/login', loginRouter)
app.use('/realEstate', realEstateRouter)
app.use('/categories', categoryRouter)
app.use('schedules', schedulesRouter)

app.use(handleError)

export default app