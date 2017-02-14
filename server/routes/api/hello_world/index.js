const express = require('express');
const router = express.Router();

router.get('/some_id', (req, res) => {
  res.json({
    exampleValue: 'This was loaded from the server',
  });
});

module.exports = router;
