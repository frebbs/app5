const mongoose = require("../utils/dbConnection");

const pingSchema = new mongoose.Schema({

    title: String,
    body: String,
    user: mongoose.Types.ObjectId,
    createdAt: {type: Date, default: Date.now}
});

const Ping = mongoose.model('Ping', pingSchema);

module.exports = Ping;