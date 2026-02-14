const express = require('express');
const app = express.Router();


const signupRoute = require('./Database/Routes/Signup')
const signinRoute = require('./Database/Routes/Signin')

app.use('/app',signupRoute);

app.use('/app',signinRoute);

module.exports = app