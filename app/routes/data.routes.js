module.exports = app => {
    const data = require('../controller/data.controller');
    const router = require('express').Router();

    router.post('/', data.create);
    router.get('/data', data.findAll);

    app.use('/api/iot', router)
}