import app from "./app";
import { AppDataSource } from "./data_source";


AppDataSource.initialize().then(() => {
    console.log("Database connected!")

    app.listen(process.env.PORT, () => {
        console.log(`Server is running in localhost:${process.env.PORT}`)
    })
}).catch((error) => {
    console.error(error)
})