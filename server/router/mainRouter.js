import express from "express"
import sql from "../db/db.js"

export const appRouter = express.Router()

appRouter.get('/', async (req, res) => {
    const jobs = await sql`SELECT * FROM jobs;`
    res.json(jobs)
})

appRouter.post("/", async (req, res) => {
    const [ sendData ] = await sql `INSERT INTO jobs(company, position, status) VALUES (${req.body.company}, ${req.body.position}, ${req.body.status});`
    res.json(sendData)
})
    