const express=require('express');
const phoneRoutes = require('./routes/phoneRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
const userModel = require('./models/user');
require('dotenv').config();

const port=process.env.APP_PORT || 5000;
const host= process.env.APP_HOST;
app.use(express.json());

const mongoose = require('./db')();
const db = mongoose.connection;
db.once('open', function() {
    console.log("Open MongoDB")
})


app.use('/api/',phoneRoutes);
app.use('/api/',userRoutes);

app.listen(port, () => {
        console.log(`Server running on port ${host}:${port}`)
      });