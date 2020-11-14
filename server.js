#!/usr/bin/env node

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to iot application." });
});

require("./app/routes/data.routes")(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

const db = require('./app/models')

db.mongoose.connect(db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`MongoDB Connected…`)
    })
    .catch(err => console.log(err))

