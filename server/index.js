/* Server Code */
/*
const express = require('express')
const app = express()
const port = 3000

app
    .get('/', (req, res) => {
    res.send('Welcome to my excercise app!')
    })
    
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/
/*Updated server to connect to client */

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '../client/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)