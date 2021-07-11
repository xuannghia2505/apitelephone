const User = require('../models/user');
const Phone = require('../models/phone');
const bcrypt = require('bcrypt');

module.exports = {
login: function(userName, passWord) {
    let userCache;
    
    return User.findOne({username: userName})    
        .then(userFound => {
            console.log(userFound)
             bcrypt.compare(passWord,userFound.password)
            .then(token =>{
                if(token){
                    userCache = userFound;
                    const phoneId = userFound.phone_id;
                    return Phone.findOne({_id: phoneId})
                    }
                   
            })
            .then(phone => {
                const userData = Object.assign({sdt: phone.sdt}, userCache._doc)             
                delete userData.password              
                delete userData.phone_id
                return Promise.resolve(userData)
            })
            
        })      
}}