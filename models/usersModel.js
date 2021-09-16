const mongoose = require('../utils/dbConnection');

const userSchema = new mongoose.Schema({
    // firstName: String,
    // lastName: String,
    username: String,
    // email: String,
    password: String,
    createdAt: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

module.exports = User;