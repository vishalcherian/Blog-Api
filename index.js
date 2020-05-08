// const basicRoutes = require('./routes/basic');
import home from './routes/home'
import posts from './routes/posts'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, () => console.log("connected to DB"));

// MIDDLEWARE - function that executes when routes are hit
app.use(bodyParser.json())  //makes sure that you can parse the request body (converts to json)
app.use(cors());

//ROUTES
app.use(home);
app.use('/posts', posts);

//LISTENING
app.listen(3000, () => console.log("app listening on port 3000"));