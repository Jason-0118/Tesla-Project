var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    //get from local

    res.render('like.ejs');
});

// const getFromDB = () => {
//     let vehicles;
//     if (localStorage.getItem('vehicles') === null)
//         vehicles = []
//     else
//         vehicles = JSON.parse(localStorage.getItem('vehicles'));
//     return vehicles;
// }

module.exports = router;
