const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const userQueries = require('./users');

// get all users
router.get('/', async (req, res) => {
  try {
    const users = await userQueries.get();
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
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

module.exports = router;
