require('dotenv').config();
const jwt = require('jsonwebtoken');
const phoneServices = require('../services/phoneServices');
const key = process.env.APP_PRIVATE_KEY;

module.exports={
    getdanhba: function(req, res, next) {
        phoneServices.getDanhba()
        .then(data => res.send({data}))
        .catch(error => next(error));
    },
    adddanhba: function(req, res, next) {
        const body = req.body;
        phoneServices.addDanhba(body)
        .then(data => res.send({status: "success", data}))
        .catch(error => next(error));
    },
    updatedanhba: function(req, res, next) {
        const phoneId = req.params.id;
        phoneServices.updateDanhba(phoneId, req.body)
        .then(data => res.send({status: "success", data}))
        .catch(error => next(error));
    },
    deletedanhba: function(req, res, next) {
        const phoneId = req.params.id;
        phoneServices.deleteDanhba(phoneId)
        .then(() => res.send({message: "success"}))
        .catch(error => next(error));
    }
}
