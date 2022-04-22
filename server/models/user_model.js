const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    favteam: { type: String, default: null },
    token: { type: String },
}, {
    timestamps: true
})
const userCollection = mongoose.model('user', userSchema, 'users');
module.exports = userCollection