const mongoose = require('mongoose');
const { currentPredictionCollection, predictionCollection } = require('../models/prediction_model');

const getSinglePrediction = async (req, res) => {
    try {
        const uid = req.params.uid;
        const pid = req.params.pid;

        const predictionObject = await predictionCollection.findOne({ pid })

        res.json({
            prediction: predictionObject
        })
    } catch (error) {
        console.log(error);
    }
}
const getPredictions = async (req, res) => {
    try {
        const uid = req.params.uid;

        const predictionArray = await predictionCollection.find({ uid })

        res.json({
            predictions: predictionArray
        })
    } catch (error) {
        console.log(error);
    }
}
const getCurrentPredictions = async (req, res) => {
    console.log('predictioin');
    try {
        const current_predictions = await currentPredictionCollection.find({});
        res.status(200).json({
            current_predictions: current_predictions
        })
    }
    catch (error) {
        console.log(error);
    }
}
const postPrediction = async (req, res) => {

}

module.exports = {
    getCurrentPredictions,
    getPredictions,
    getSinglePrediction,
    postPrediction
}