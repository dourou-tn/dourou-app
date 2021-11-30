const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const userQueries = require('../users/users');
const auth = require('./../../middleware/auth.js');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, username, firstname, lastname, phone  } = req.body

  if (!email) {
    console.error('Error Email')
    return res.status(400).json({ code: 400, error: 'email is required' });
  }

  if (!password) {
    console.error('Error password')
    return res.status(400).json({ code: 400, error: 'password is required' });
  }


  const cryptedPassword = await bcrypt.hash(password, 10);
  await userQueries.create({
    email,
    username,
    firstname,
    lastname,
    phone,
    role_id: 1,
    password: cryptedPassword,
  });

  const [ user ] = await userQueries.get({ email });

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
    return res.status(400).json({ error: 'email is required' });
  }

  if (!password) {
    console.error('Error password');
    return res.status(400).json({ error: 'password is required' });
  }

  try {
    const [user] = await userQueries.get({ email: email }, true);
    if (user) {
      const samePassword = await bcrypt.compare(password, user.password.toString())
      if (samePassword) {
        const token = jwt.sign(
          { user: user },
          process.env.JWT_TOKEN_KEY,
          { expiresIn: "2h" },
        );
        return res.status(200).json({ user: user, token: token });
      }
    }

    return res.status(400).json({ error: 'Invalid user email or password '});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'fqq' })
  }

})

router.get('/user', auth, async (req, res) => {
  const user = await userQueries.get({ id: req.user.id });
  res.json({user: user }).status(200);
})

module.exports = router;
