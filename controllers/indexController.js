var express = require('express');
var path = require('path');
var app= express();
var menues=require('../data/menues')
var about=require('../data/about')

/* GET home page. */
const indexController ={
    index:(
      (req, res)=> {
        res.render('index', {menues, about})
      }
    ),

};

module.exports = indexController;