const express = require('express');
const router = express.Router();

router.get('/:projectId', (req, res) => {
  res.json({
    'project_name': 'project title 2',
    'project_description': 'project Description 2',
    'project_owner': 'foo',
    'project_id': '1',
    metadata: {
      skey1: 'value1',
      skey2: 'value2',
      skey3: {
        skey4: 'nested1Value1',
        skey5: 'nested1Value2',
        skey6: {
          skey7: 'nested2Value1'
        }
      }
    },
    dataset: {
    },
  });
});

router.post('/update', (req, res) => {
  res.json(req.body);
});

router.post('/create', (req, res) => {
  req.body['project_id'] = '1';
  res.json(req.body);
});

module.exports = router;
