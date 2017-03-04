const express = require('express');
const router = express.Router();


router.get('/user', (req, res) => {
  console.log("Router for /project/user");
  const projects = [
    { project_id: '1', project_owner: 'chocolatebanana', project_name: 'IMPOWR', project_description: 'Improving the Mapping and Prediction of Offshore Wind Resources' },
    { project_id: '2', project_owner: 'chocolatebanana', project_name: 'LMWA', project_description: 'Lake Michigan Wind Assessment' },
    { project_id: '3', project_owner: 'chocolatebanana', project_name: 'MMC', project_description: 'Mesoscale-Microscale Coupling' },
    { project_id: '4', project_owner: 'chocolatebanana', project_name: 'WIND', project_description: 'The Wind Integration National Dataset (WIND) Toolkit' },
  ];
  res.json(projects);
});


module.exports = router;
