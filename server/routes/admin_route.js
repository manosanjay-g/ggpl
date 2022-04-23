const express = require('express');
const { getAllPredictions, getAllCurrentPredictions, announceMatch, addTeam, addPlayer, moderateUser } = require('../controllers/admin_controller');
const router = express.Router();

router.get('/all_predictions', getAllPredictions);
router.get('/all_current_predictions', getAllCurrentPredictions);
router.post('/annouce_match', announceMatch);
router.post('/add_team', addTeam);
router.post('/add_player', addPlayer);
router.post('/moderate_user', moderateUser);

module.exports = router
