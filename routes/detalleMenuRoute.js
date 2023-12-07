var express = require('express');
var router = express.Router();
var detalleMenu= require('../controllers/detalleMenuController')

/* GET home page. */
router.get('/:idMenu', detalleMenu.index);

module.exports = router;
