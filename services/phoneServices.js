const Phone = require('../models/phone');
const User = require('../models/user');

module.exports = {
    
    addDanhba: function(phone) {
        return new Promise(function(res, rej){
            const newPhone = new Phone(phone);
            newPhone.save(function (err) {
                if (err) {
                    rej({message:"error"})
                } else {
                    res(newPhone)
                }
            });
        });
    },
    getDanhba: function() {
        return Phone.find();
    },
    deleteDanhba: function(phoneId) {
        return new Promise(function(resolve, reject) {
            Phone.deleteOne({_id: phoneId}, function(err) {
                if (!err) {
                    resolve()
                } else {
                    reject(err)
                }
            })
        })
    },
    updateDanhba: function(phoneId, data) {
        return new Promise(function(resolve, reject) {
            Phone.updateOne({_id: phoneId}, data, function(err) {
                if (!err) {
                    resolve()
                } else {
                    reject(err)
                }
            })
        })
    }
}