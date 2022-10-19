var express = require('express');
var router = express.Router();
var likeController = require('../controllers/likeController')


router.get('/', likeController.get_liked_vehicles)
router.get('/delete/:delete', likeController.deleteSingle)
router.get('/deleteAll', likeController.delete_all)
module.exports = router;
