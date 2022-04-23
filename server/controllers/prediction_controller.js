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
    try {
        const { uid, name, batsman, bowler, pp1, pp2, score, win } = req.body;
        if (!(uid && name && batsman && bowler)) {
            res.status(400).json({
                error: "Fill all the required credentials"
            })
        }

        const prediction = await predictionCollection.create({
            uid,
            name,
            batsman,
            bowler,
            pp1,
            pp2,
            score,
            win
        });
        const existingCurrentPrediction = await currentPredictionCollection.findOne({ uid });
        if (!existingCurrentPrediction) {
            const current_prediction = await currentPredictionCollection.create({
                uid,
                name,
                batsman,
                bowler,
                pp1,
                pp2,
                score,
                win
            })
            return res.status(200).json({
                current_prediction: current_prediction,
                prediction: prediction
            })
        } else {
            const current_prediction = await currentPredictionCollection.updateOne({ uid: uid }, {
                uid,
                name,
                batsman,
                bowler,
                pp1,
                pp2,
                score,
                win
            })
            return res.status(200).json({
                current_prediction: current_prediction,
                prediction: prediction
            })
        }
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCurrentPredictions,
    getPredictions,
    getSinglePrediction,
    postPrediction
}