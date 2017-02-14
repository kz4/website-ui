const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/hello_world', require('./hello_world'));

module.exports = router;
