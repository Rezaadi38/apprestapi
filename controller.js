'use strict';

var response = require('./rest');
var connection = require('./koneksi');

exports.index = function(req,rest){
    response.ok("aplikasi REST API ku berjalan!",rest)
};          