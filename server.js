const express = require('express');
const cors=require('cors')
const app = express();
// const PORT = require('./utils/config');
const mailrouter = require('./Controller/Mailrouter');
const ProjectRouter = require('./Controller/projects');


// const mailrouter=require('./Control

app.use(cors());

app.use(express.json());

app.use('/api/sendmail/', mailrouter);
app.use('/api/projects/',ProjectRouter)




module.exports = app;

    
