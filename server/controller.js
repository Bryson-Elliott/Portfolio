const about = require('')
const skills = require('')
const projects = require('')
const contact = require('')


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


