const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const user = req.body;
  res.json(user);
});

router.post('/logout', (req, res) => {
  res.send();
});

router.post('/register', (req, res) => {
  const user = req.body;
  res.json(user);
});

module.exports = router;
