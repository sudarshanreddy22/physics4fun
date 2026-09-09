/*
  Usage:  node scripts/seedTeacher.js <username> <password> "<full name>" [role]
  role defaults to "teacher"; pass "admin" to also allow creating other teacher accounts.
*/
require('dotenv').config();
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');
const User = require('../models/User');

async function main() {
  const [username, password, name, role] = process.argv.slice(2);
  if (!username || !password || !name) {
    console.log('Usage: node scripts/seedTeacher.js <username> <password> "<full name>" [role]');
    process.exit(1);
  }

  await connectDB();
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.findOneAndUpdate(
    { username: username.trim().toLowerCase() },
    { username: username.trim().toLowerCase(), passwordHash, name, role: role === 'admin' ? 'admin' : 'teacher', active: true },
    { upsert: true, new: true }
  );
  console.log('Teacher account ready:', { username: user.username, name: user.name, role: user.role });
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
