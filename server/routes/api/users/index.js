const express = require('express');
const router = express.Router();

router.post('/validate', (req, res) => {
  const user = req.body;
  res.json(user);
});

router.post('/signup', (req, res) => {
  // res.status(403).json({});
  res.send();
});


module.exports = router;
