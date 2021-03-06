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

exports.getTemperatureChart = (req, res) => {
    let temperatures = [];
    Data.find()
        .then(data => data.map(log => log.temperature ? temperatures.push(log.temperature): undefined))
        .then(() => {
            const fitArray = temperatures.slice(temperatures.length-10, temperatures.length)
            const dts = [];
            fitArray.map((t, index) => {
                dts.push({value:[index, t.temperature]})
            })
            res.send(dts)
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || 'Not Found'
            })
        })
}

exports.getAirChart = (req, res) => {
    let airQualities = [];
    Data.find()
        .then(data => data.map(log => log.airQuality ? airQualities.push(log.airQuality): undefined))
        .then(() => {
            const fitArray = airQualities.slice(airQualities.length-10, airQualities.length)
            const dts = [];
            fitArray.map((t, index) => {
                dts.push({value:[index, t.analog]})
            })
            res.send(dts)
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || 'Not Found'
            })
        })
}

exports.getNoiseChart = (req, res) => {
    let noises = [];
    Data.find()
        .then(data => data.map(log => log.noise ? noises.push(log.noise): undefined))
        .then(() => {
            const fitArray = noises.slice(noises.length-10, noises.length)
            const dts = [];
            fitArray.map((t, index) => {
                dts.push({value:[index, t.analog]})
            })
            res.send(dts)
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || 'Not Found'
            })
        })
}

exports.findLastTenIsNearTheMeal = (req, res) => {
    let nearTheMeal = [];
    Data.find()
        .then(data => data.map(log => log.isNearTheMeal ? nearTheMeal.push(log.isNearTheMeal): undefined))
        .then(() => res.send(nearTheMeal.slice(nearTheMeal.length-5, nearTheMeal.length)))
        .catch(err => {
            res.status(400).send({
                message: err.message || 'Not Found'
            })
        })
}

exports.findLastTenTemperatures = (req, res) => {
    let temperatures = [];
    Data.find()
        .then(data => data.map(log => log.temperature ? temperatures.push(log.temperature): undefined))
        .then(() => res.send(temperatures.slice(temperatures.length-5, temperatures.length)))
        .catch(err => {
            res.status(400).send({
                message: err.message || 'Not Found'
            })
        })
}

exports.findLastTenAirQualities = (req, res) => {
    let airQualities = [];
    Data.find()
        .then(data => data.map(log => log.airQuality ? airQualities.push(log.airQuality): undefined))
        .then(() => res.send(airQualities.slice(airQualities.length-5, airQualities.length)))
        .catch(err => {
            res.status(400).send({
                message: err.message || 'Not Found'
            })
        })
}

exports.findLastTenNoises = (req, res) => {
    let noises = [];
    Data.find()
        .then(data => data.map(log => log.noise ? noises.push(log.noise): undefined))
        .then(() => res.send(noises.slice(noises.length-5, noises.length)))
        .catch(err => {
            res.status(400).send({
                message: err.message || 'Not Found'
            })
        })
}
