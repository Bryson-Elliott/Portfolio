const about = require('about.md')
const skills = require('skills.md')
const projects = require('project.md')
const contact = require('contact.md')

module.exports = {
    getAbout: (req, res) => {
        res.status(200).send(about)
    },
    getSkills: (req, res) => {
        res.status(200).send(skills)
    },
    getProjects: (req, res) => {
        res.status(200).send(projects)
    },
    getContact: (req, res) => {
        res.status(200).send(contact)
    },
}


