// const basicRoutes = require('./routes/basic');
import basicRoutes from './routes/basic'

const express = require('express');

const app = express()

// MIDDLEWARE - function that executes when routes are hit
//  whenever you hit the post endpoint, this function will run
app.use('/posts', () => {

})
//ROUTES

app.use(basicRoutes);

//LISTENING
app.listen(3000, () => console.log("app listening on port 3000"));