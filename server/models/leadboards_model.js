const mongoose = require('mongoose')

const leaderboardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    points: { type: Number, default: 0 }
})

module.exports = mongoose.model('leaderboard', leaderboardSchema, 'leaderboards')