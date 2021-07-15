const express= require('express');
const phoneControllers = require('../controllers/phoneControllers'); 
const valiDatePhone = require('../middlewares/phoneFormValidate');
const authMiddleware = require('../middlewares/authJWT');
const app = express();

app.use(authMiddleware);

//add danhba
app.post('/phone', valiDatePhone, phoneControllers.adddanhba);

//select danhba
app.get('/list',phoneControllers.getdanhba);

//update danhba
app.patch('/phone/:id',valiDatePhone,phoneControllers.updatedanhba);

//delete danhba
app.delete('/phone/:id',phoneControllers.deletedanhba);

module.exports= app;