const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const user = req.body;
  res.json(user);
});

router.post('/login_reject', (req, res) => {
  res.status(403).json({});
});

router.post('/logout', (req, res) => {
  res.send();
});

router.post('/register', (req, res) => {
  const user = req.body;
  res.json(user);
});

router.get('/profile', (req, res) => {
  res.json({
    name: 'fromServerName',
    phone: 'fromServerPhone',
    email: 'fromServerEmail',
  });
});

router.post('/profile', (req, res) => {
  const user = req.body;
  res.json(user);
});

module.exports = router;
