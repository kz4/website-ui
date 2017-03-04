const express = require('express');
const router = express.Router();


router.get('/project', (req, res) => {
  const projects = [
    { name: 'IMPOWR', description: 'Improving the Mapping and Prediction of Offshore Wind Resources' },
    { name: 'LMWA', description: 'Lake Michigan Wind Assessment' },
    { name: 'MMC', description: 'Mesoscale-Microscale Coupling' },
    { name: 'WIND', description: 'The Wind Integration National Dataset (WIND) Toolkit' },
  ];
  res.json(projects);
});


module.exports = router;
