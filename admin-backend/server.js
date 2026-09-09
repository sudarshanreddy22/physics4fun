require('dns').setServers(['8.8.8.8']);
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/questions');

const app = express();

app.use(cors());
app.use(express.json({ limit: '5mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);

// Teacher admin panel (static UI)
app.use('/admin', express.static(path.join(__dirname, 'public/admin')));

app.get('/api/health', (req, res) => res.json({ ok: true }));

// Central error handler (multer errors, JSON parse errors, etc.)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Admin backend running on http://localhost:${PORT}  (panel: /admin)`));
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });
