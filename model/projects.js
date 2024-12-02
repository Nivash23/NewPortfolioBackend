const Mongodb = require('mongoose');

const projectSchema = new Mongodb.Schema({
    ProjectName: String,
    Implementation: String,
    imagesrc: String,
    category: String,
    codecheck: String,
    livecheck:String,
})

const projects = Mongodb.model('project', projectSchema, 'projects');

module.exports = projects;