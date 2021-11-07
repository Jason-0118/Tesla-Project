var express = require('express');
var router = express.Router();
var rateController = require('../controllers/rateController')

router.get('/', rateController.get_all)



router.get('/model/:model', function (req, res, next) {
    res.render('rate.ejs', { title: req.params.model });
});


module.exports = router;
