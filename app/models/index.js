const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.uri = "mongodb+srv://admin:admin123@cluster0.ykyid.mongodb.net/iot-cats?retryWrites=true&w=majority";
db.data = require("./data.model")(mongoose);

module.exports = db;