const ProjectRouter = require('express').Router();

const projects = require('../model/projects');

ProjectRouter.get('/', async (req, res) => {
    const allprojects = await projects.find();

    res.status(200).json({
        Allprojects:allprojects,
    })
})

module.exports = ProjectRouter;