var express = require('express');
var app = express();
var path = require('path');
var menues = require('../data/menues')


const detalleMenuController = {
    index: ((req, res,) => {
       let {idMenu}=req.params;

        res.render('detalleMenu.ejs', { menues, idMenu})
    }
    )
};

module.exports = detalleMenuController;