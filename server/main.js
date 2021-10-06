const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const ctrl = require('./controller.js')

app.use(express.static("client"))
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/api/about', ctrl.getAbout)
app.get('/api/skills', ctrl.getSkills)
app.get('/api/projects', ctrl.getProjects)
app.get('/api/contact', ctrl.getContact)


const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
