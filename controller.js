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

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function(req,rest){
   let id = req.params.id;
   connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?',[id],
     function(error, rows, fields){
        if(error){
        }else {
            response.ok(rows, rest);
        
        }
     });    
}; 

//menambahkan data mahasiswa 
exports.tambahMahasiswa = function(req,rest) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',
    [nim,nama,jurusan],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data!",rest)
        }
        });
    };

    //mengubah data berdasarkan id 
    exports.ubahMahasiswa = function (req, rest) {
        var id = req.body.id_mahasiswa;
        var nim = req.body.nim;
        var nama = req.body.nama;
        var jurusan = req.body.jurusan;

        connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan,id],
            function(error, rows, fields){
               if (error) {
                    console.log(error);
               }else {
                  response.ok("Berhasil Ubah Data", rest)
               }

            }); 
}