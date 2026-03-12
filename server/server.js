import express from "express"

const PORT = 8000

const server = express()

server.get('/',  (req, res) => {
    res.json("123")
})

server.listen(PORT, () => `server running on port: ${PORT}`)