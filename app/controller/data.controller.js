const db = require('../models');
const Data = db.data;

exports.create = (req, res) => {
    const data = new Data(req.body)
    data.save(req.body)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Data."
            });
        });
}

exports.findAll = (req, res) => {
    Data.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || 'Not Found'
            })
        })
}

exports.findLastFive = (req, res) => {

}