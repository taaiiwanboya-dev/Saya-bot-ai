const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/generate', gameController.generateGame);
router.get('/history', gameController.getGameHistory);
router.get('/:id', gameController.getGame);

module.exports = router;
