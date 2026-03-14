import express from "express"
import cors from "cors"
import { appRouter } from "./controller/mainController.js"

const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', appRouter)

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))