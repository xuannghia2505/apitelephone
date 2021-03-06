require('dotenv').config();
const jwt = require('jsonwebtoken');
const userServices = require('../services/userServices');
const key = process.env.APP_PRIVATE_KEY;

module.exports={
    login: function(req, res, next) {
        const userName = req.body.username;
        const passWord = req.body.password;
        
        userServices.login(userName, passWord)
        .then(data => {
            const authToken = jwt.sign({data}, key);
            console.log(authToken)
            res.set('Token', authToken);
            //null
            console.log(data)
            res.json({data})
        })
        .catch(error => next(error))
    },
    register: function(req, res, next) {
        const body = req.body;
        userServices.register(body)
        .then(data => res.send({status: "success", data}))
        .catch(error => next(error));
    }
}