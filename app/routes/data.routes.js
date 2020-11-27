module.exports = app => {
    const data = require('../controller/data.controller');
    const router = require('express').Router();

    router.post('/', data.create);
    router.get('/data', data.findAll);
    router.get('/data/temperatureChart', data.getTemperatureChart);
    router.get('/data/airQualityChart', data.getAirChart);
    router.get('/data/noiseChart', data.getNoiseChart);
    router.get('/data/isNearTheMeal', data.findLastTenIsNearTheMeal);
    router.get('/data/temperatures', data.findLastTenTemperatures);
    router.get('/data/airQualities', data.findLastTenAirQualities);
    router.get('/data/noises', data.findLastTenNoises);

    app.use('/api/iot', router)
}