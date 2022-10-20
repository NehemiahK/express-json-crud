// import bcrypt from 'bcrypt'
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export async function checkPasswordsMatch(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

export default router.post('/signup').post('login');
