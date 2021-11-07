var express = require('express');
var router = express.Router();
var vehicleController = require('../controllers/vehicleController')

/* GET home page. */
router.get('/', vehicleController.get_all)
router.get('/model/:model', vehicleController.get_vehicle)
router.get('/detail/:detail', vehicleController.get_detail)

module.exports = router;
