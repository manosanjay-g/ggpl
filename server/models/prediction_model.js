const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    name: { type: String, required: true },
    batsman: { type: String, required: true },
    bowler: { type: String, required: true },
    pp1: { type: String, default: null },
    pp2: { type: String, default: null },
    score: { type: String, default: null },
    win: { type: String, default: null },
}, {
    timestamps: true
})
const predictionCollection = mongoose.model('prediction', predictionSchema, 'predictions');
const currentPredictionCollection = mongoose.model('current_prediction', predictionSchema, 'current_predictions');
module.exports = {
    predictionCollection,
    currentPredictionCollection
}