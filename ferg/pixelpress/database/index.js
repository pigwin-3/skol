const express = require('express');

var mysql = require('mysql');
var config  = require("./conf.json");

var con = mysql.createConnection(config.db);


for (let i = 0; i < cars.length; i++) {
  con.connect(function(err) {
    //console.log("Connected!");
    var sql = "SELECT * FROM catagory LIMIT 1000;";
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  });
}

// you shold understand this atleast
app.listen(port, () => {
  console.log(`ip:${port}`);
  console.log('done')
})