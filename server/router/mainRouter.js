import express from "express"
import sql from "../db/db.js"

export const appRouter = express.Router()

appRouter.get('/', async (req, res) => {
    const jobs = await sql`SELECT * FROM jobs`
    res.json(jobs)
})

appRouter.post("/", (req, res) => {
    console.log(req.body)
    return res.send(200)
})
