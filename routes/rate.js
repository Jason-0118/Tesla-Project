var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
var rateController = require('../controllers/rateController')

router.get('/model/:model', function (req, res, next) {
    let API = "https://cs-361-tesla.herokuapp.com/tesla/?name=2021 " + req.params.model;
    fetch(API)
        .then((response) => {
            if (!response.ok) console.error("Issue with request", response);
            return response.json();
        })
        .then((data) => {
            let intro = data
            res.render('rate.ejs', {
                title: req.params.model,
                intro
            });
        })

});


module.exports = router;
