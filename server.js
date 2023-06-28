require("dotenv").config()
const express = require("express");
const cors = require("cors");
const ctrl = require('./ctrl.js')

const { getApplications, createApplication } = ctrl

const app = express();

const { SERVER_PORT } = process.env

app.use(express.json());
app.use(cors());



app.get( "/api/applications", getApplications)
app.post( "/api/applications", createApplication)

app.listen(SERVER_PORT, () => console.log(`Server up on ${ SERVER_PORT }`))