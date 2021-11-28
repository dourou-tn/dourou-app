const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const userQueries = require('../users/users');

const router = express.Router();

router.post('/register', async (req, res, next) => {
  const { email, password, username, firstname, lastname, phone  } = req.body

  if (!email) {
    console.error('Error Email')
    return res.json({ code: 400, error: 'email is required' }).status(400);
  }

  if (!password) {
    console.error('Error password')
    return res.json({ code: 400, error: 'password is required' }).status(400);
  }


  const cryptedPassword = await bcrypt.hash(password, 10);
  const user = await userQueries.create({
    email,
    username,
    firstname,
    lastname,
    phone,
    role_id: 1,
    password: cryptedPassword,
  });

  const token = jwt.sign(
    { user: user },
    process.env.JWT_TOKEN_KEY,
    { expiresIn: "2h" },
  );

  user.token = token;
  return res.status(201).json({ success: true, data: user });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    console.error('Error Email');
    return res.json({ error: 'email is required' }).status(400);
  }

  if (!password) {
    console.error('Error password');
    return res.json({ error: 'password is required' }).status(400);
  }

  try {
    const [user] = await userQueries.get({ email: email });

    const samePassword = await bcrypt.compare(password, user.password.toString())
    if (user && samePassword) {
      const token = jwt.sign(
        { user: user },
        process.env.JWT_TOKEN_KEY,
        { expiresIn: "2h" },
      );
      user.token = token
      return res.status(200).json(user);
    }

    return res.status(400).json({ error: 'Invalid user email or password '});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'fqq' })
  }

})

module.exports = router;
