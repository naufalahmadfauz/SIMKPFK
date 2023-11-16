const express = require('express')
const homeRouter = require('./routers/home')
// const session = require('express-session')
// const MemoryStore = require('memorystore')(session)


// const hbs = require('hbs')
const path = require("path");
//
// const viewsPath = path.join(__dirname, '../templates/views')
// const vartialsPath = path.join(__dirname, '../templates/partials')
// const publicDirectoryPath = path.join(__dirname, '../public')
const pictureDirectoryPath = path.join(__dirname, '../storage/picture')

const app = express()


// app.use(express.static(publicDirectoryPath))
app.use(express.static(pictureDirectoryPath))

// app.set('views', viewsPath)
// app.set('view engine', 'hbs')
// hbs.registerPartials(vartialsPath)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 1800000,
//         sameSite: 'lax'
//     },
//     resave: false,
//     store: new MemoryStore({ checkPeriod: 86400000 })
// }));
app.use(homeRouter)

module.exports = app

//to be implemented later
//compression already implemented in production