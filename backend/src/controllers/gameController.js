const gameService = require('../services/gameService');

const generateGame = async (req, res) => {
  try {
    const { description, difficulty } = req.body;
    if (!description) {
      return res.status(400).json({ error: 'Description required' });
    }
    const gameCode = await gameService.generateGameWithAI(description, difficulty);
    res.json({ success: true, game: gameCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGameHistory = async (req, res) => {
  res.json({ success: true, games: [] });
};

const getGame = async (req, res) => {
  res.json({ success: true, game: null });
};

module.exports = { generateGame, getGameHistory, getGame };
