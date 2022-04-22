const express = require('express');
const router = express.Router()
const { getCurrentPredictions, postPrediction, getPredictions, getSinglePrediction } = require('../controllers/prediction_controller');

router.post('/add_prediction', postPrediction)
router.get('/current_predictions', getCurrentPredictions)
router.get('/:uid', getPredictions)
router.get('/:uid/:pid', getSinglePrediction)
module.exports = router;