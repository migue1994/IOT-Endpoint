module.exports = app => {
    const data = require('../controller/data.controller');
    const router = require('express').Router();

    router.post('/', data.create);
    router.get('/data', data.findAll);
    router.get('/data/temperatures', data.findLastTenTemperatures);
    router.get('/data/airQualities', data.findLastTenAirQualities);
    router.get('/data/noises', data.findLastTenNoises);
    router.get('/data/isNearTheMeal', data.findLastTenIsNearTheMeal);

    app.use('/api/iot', router)
}