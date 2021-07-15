const User = require('../models/user');
const Phone = require('../models/phone');
const bcrypt = require('bcrypt');
const mongose = require('mongoose');

module.exports = {
    login: function (userName, passWord) {
        let userCache;

        return User.findOne({ username: userName })
            .then(userFound => {
                console.log(userFound)
                return bcrypt.compare(passWord, userFound.password)
                    .then(token => {
                        if (token) {
                            userCache = userFound;
                            const phoneId = userFound.phone_id;
                            console.log("phone" + phoneId)
                            return Phone.findById(phoneId);
                        }
                    })
                    .then(phone => {
                        const userData = Object.assign({ sdt: phone.sdt }, userCache._doc)
                        delete userData.password
                        delete userData.phone_id
                        return Promise.resolve(userData)
                    })



            })
    },
    register: function(user) {
        return new Promise(function(res, rej) {
                
                const newUser = new User(user);
                console.log(newUser)
                newUser.save(function (err) {
                    if (err) {
                        rej({message: "error"})
                    } else {
                        res(newUser)
                    }
                }); 
            });  
        }  
   }
