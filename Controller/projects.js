const ProjectRouter = require('express').Router();

const projects = require('../model/projects');

ProjectRouter.get('/', async (req, res) => {
    const Allprojects = await projects.find();

    res.status(200).json({
        Allprojects
    })
})

module.exports = ProjectRouter;