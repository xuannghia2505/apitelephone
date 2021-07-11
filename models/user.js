const mongoose = require('mongoose');
const Phone = require('./phone');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema=new mongoose.Schema({
    username: String,
    password: String,
    phone_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Phone'}
});

userSchema.pre("save",function(next){
    if(!this.isModified("password")) return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err) return (err);
        this.password = passwordHash;
        next();
    });
});

userSchema.methods.comparePassword = function (password,cb){
    bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err) return cb(err);
        else{
            if(!isMatch) return cb(null,isMatch);
            return cb(null),this;
        }
    });
}

const User = mongoose.model('User',userSchema);
module.exports=User;