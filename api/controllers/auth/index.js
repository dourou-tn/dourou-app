const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const userQueries = require('../users/users');

const router = express.Router();

router.post('/register', async (req, res, next) => {
  const { email, password } = req.body

  if (!email) {
    console.error('Error Email')
    return res.json({ code: 400, reason: 'email is required' }).status(400);
  }

  if (!password) {
    console.error('Error password')
    return res.json({ code: 400, reason: 'password is required' }).status(400);
  }


  const cryptedPassword = await bcrypt.hash(password, 10);
  const user = await userQueries.create({
    email,
    password: cryptedPassword,
    role_id: 1
  });

  const token = jwt.sign(
    { user: user },
    process.env.TOKEN_KEY,
    { expiresIn: "2h" },
  );

  user.token = token;
  return res.status(201).json({ success: true, data: user });
});

router.post('/login', async (req, res) => {
  // TODO
})

module.exports = router;
