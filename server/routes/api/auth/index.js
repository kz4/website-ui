const express = require('express');
const router = express.Router();

// /api/auth/login
router.post('/login', (req, res) => {
  // const user = req.body;
  res.json({
    username: '123',
    token: 'dgdshdsgrs',
    projects: [{id: 'proj1'}, {id: 'proj2'}]
  });
});

router.post('/logout', (req, res) => {
  res.send();
});

router.post('/register', (req, res) => {
  const user = req.body;
  res.json(user);
});

module.exports = router;
