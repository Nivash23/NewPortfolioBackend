const express = require('express');
const cors=require('cors')
const app = express();
// const PORT = require('./utils/config');
const mailrouter = require('./Controller/Mailrouter');
const RegisterRouter = require('./Controller/Registration');
const LoginRouter = require('./Controller/Login');

// const mailrouter=require('./Control

app.use(cors());

app.use(express.json());

app.use('/api/sendmail/', mailrouter);
app.use('/api/register/', RegisterRouter);
app.use('/api/login/',LoginRouter)



module.exports = app;

    
