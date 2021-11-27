var express = require('express');
var router = express.Router();
var vehicleController = require('../controllers/vehicleController')

router.get('/model/:model', vehicleController.get_vehicle)
router.get('/detail/:detail', vehicleController.get_detail)
router.get('/update/:update', vehicleController.get_update)

module.exports = router;
