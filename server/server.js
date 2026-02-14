
const express = require('express');
const server = express();
const DbConnection = require('./Database/DbConnection')
const appRoutes = require('./app')

require('dotenv').config();

DbConnection();
server.use(express.json());


const cors = require("cors");

server.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
}));


server.get('/', (req, res)=>{
    res.send("server running")
})

server.use('/api', appRoutes)



const PORT = process.env.PORT || 5000 

server.listen(PORT, ()=>{
    console.log("server listening at http://localhost:5000")
})