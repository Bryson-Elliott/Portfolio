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
app.get('/api/skill', ctrl.getSkills)
app.get('/api/project', ctrl.getProjects)
app.get('/api/contact', ctrl.getContact)


const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})


function myFunction() {
    var x = document.getElementByClassName("aboutme");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

myFunction("click", (req))