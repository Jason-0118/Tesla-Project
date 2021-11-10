var express = require('express');
var router = express.Router();
var rateController = require('../controllers/rateController')

router.get('/model/:model', rateController.get_rate)


module.exports = router;
