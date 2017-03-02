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

router.get('/projects', (req, res) => {
  const projects = [
    { name: 'IMPOWR', description: 'Improving the Mapping and Prediction of Offshore Wind Resources' },
    { name: 'LMWA', description: 'Lake Michigan Wind Assessment' },
    { name: 'MMC', description: 'Mesoscale-Microscale Coupling' },
    { name: 'WIND', description: 'The Wind Integration National Dataset (WIND) Toolkit' },
  ];
  res.json(projects);
});


module.exports = router;
