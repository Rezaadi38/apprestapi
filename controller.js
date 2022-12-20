'use strict';

var response = require('./rest');
var connection = require('./koneksi');

exports.index = function(req,rest){
    response.ok("aplikasi REST API ku berjalan!",rest)
};      

//menamppikan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req,rest){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
       if(error){
        connection.log(error);
       }else {
        response.ok(rows, rest)
       }        
    });
};