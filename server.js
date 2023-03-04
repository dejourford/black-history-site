// setup server
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8

//serve static files 
app.use(express.static('public'))

// setup listen api
app.listen(PORT,() => {
    console.log(`The server is running on port ${PORT}`)
} ) 