require('dotenv').config()

const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT || 3737
const requestLogger = require('./middlewares/request_logger')
const reqBodyMethodOverride = require('./middlewares/req_body_method_override')

const setCurrentUser = require('./middlewares/set_current_user')
const session  = require('express-session')
const db = require('./db/index.js')
const dishesRoutes = require('./routes/dishes_routes')
const sessionsRoutes = require('./routes/sessions_routes')
const pagesRoutes = require('./routes/pages_routes') 
const usersRoutes = require('./routes/users_routes') 





app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.use(reqBodyMethodOverride)

// enable session as an object in req so we can write values in it - default to using cookies
app.use(session({secret: process.env.SESSION_SECRET || "mistyrose", resave: false, saveUninitialized: true}))





app.use(setCurrentUser)

app.use(requestLogger)

app.use(expressLayouts)


app.use(pagesRoutes)
app.use(dishesRoutes)
app.use(sessionsRoutes)
app.use(usersRoutes)

app.listen(port, (req, res) => {
    console.log(`listening on port: ${port}`)
})
