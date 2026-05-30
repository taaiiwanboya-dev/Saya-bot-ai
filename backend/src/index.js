const express = require('express');
const cors = require('cors');
require('dotenv').config();
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/games', gameRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server running!' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
