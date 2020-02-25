const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/posts');
const bodyParser = require('body-parser');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true},()=>{mongoose.connection.readyState ? console.log("Connected to DB...") : (console.log("Failed to connect to DB.."),()=> process.exit())});

app.use(express.json());

app.use('/api/user', authRouter);
app.use('/api/posts', postRouter);


app.listen(3000, ()=> console.log("Listening on port 3000..."));