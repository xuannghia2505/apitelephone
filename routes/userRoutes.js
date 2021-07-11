const userControllers = require('../controllers/userController'); 
const express= require('express');
const app = express();

//login
app.post('/login',userControllers.login);


module.exports= app;