const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    Email: String,
    Name: String,
    Password: String
});

const User = mongoose.model('user', RegisterSchema, 'users');

module.exports = User;