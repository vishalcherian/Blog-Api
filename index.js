import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import homeRoutes from './routes/home';
import postsRoutes from './routes/posts';
import authRoutes from './routes/auth';

const app = express()
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("connected to DB"));

// MIDDLEWARE - function that executes when routes are hit
app.use(bodyParser.json())  //makes sure that you can parse the request body (converts to json)
app.use(cors());

//ROUTES
app.use('/api', homeRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/user', authRoutes)
//LISTENING
app.listen(3000, () => console.log("app listening on port 3000"));