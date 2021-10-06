const baseURl = `http://localhost:4000/api/about`

const aboutCallback = ({ data: about }) => displayAbout(about)
const skillsCallback = ({ data: skills }) => displaySkills(skills)
const projectsCallback = ({ data: projects }) => displayProjects(projects)
const contactCallback = ({ data: contact }) => displayContact(contact)
const errCallback = err => console.log(err)

const getAbout = () => axios.get(baseURL).then(aboutCallback).catch(errCallback)
const getSkills = () => axios.get(baseURl).then(skillsCallback).catch(errCallback)
const getProjects = () => axios.get(baseURl).then(projectsCallback).catch(errCallback)
const getContact = () => axios.get(baseURl).then(contactCallback).catch(errCallback)