const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// POST /api/auth/login  { username, password } -> { token, user }
router.post('/login', async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'username and password are required' });

  const user = await User.findOne({ username: username.trim().toLowerCase(), active: true });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

  const payload = { id: user._id, username: user.username, role: user.role, name: user.name };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '8h'
  });

  res.json({ token, user: payload });
});

// GET /api/auth/me  -> current user (token check)
router.get('/me', requireAuth, (req, res) => res.json({ user: req.user }));

// POST /api/auth/teachers  (admin-only) create a new teacher account
router.post('/teachers', requireAuth, requireAdmin, async (req, res) => {
  const { username, password, name, role } = req.body || {};
  if (!username || !password || !name) {
    return res.status(400).json({ error: 'username, password and name are required' });
  }
  const exists = await User.findOne({ username: username.trim().toLowerCase() });
  if (exists) return res.status(409).json({ error: 'Username already exists' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    username: username.trim().toLowerCase(),
    passwordHash,
    name,
    role: role === 'admin' ? 'admin' : 'teacher'
  });
  res.status(201).json({ id: user._id, username: user.username, name: user.name, role: user.role });
});

module.exports = router;
