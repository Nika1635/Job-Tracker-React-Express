import express from "express"
import sql from "../db/db.js"

export const appRouter = express.Router()

appRouter.get('/', async (req, res) => {
    const jobs = await sql`SELECT * FROM jobs;`
    res.json(jobs)
})

appRouter.post("/", async (req, res) => {
    console.log(req.body)
    const sendData = await sql `INSERT INTO jobs(company, position, status) VALUES (${req.body.company}, ${req.body.position}, "Interview");`
    res.json(sendData)
})
