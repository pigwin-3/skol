const express = require('express')
const path = require('path');
const cors = require('cors');

var mysql = require('mysql');

const app = express()
app.use(cors())
const port = 3000

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

app.get('/get', (req, res) => {
  con.connect(function(err) {
    console.log("Connected!");
    var sql = "select * from test.test1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("test", result);
      res.send(result)
    });
  });
})
//legg til database
app.get('/get/:id', function(req, res){
  // res.send('id: ' + req.params.id); 
  var lol= req.params.id
  var sql2 = "select * from test.test1 where `test` =" + lol;
  con.query(sql2, function (err, result) {
    if (err){
      res.send("failed to get gud")
    }
    console.log("test", result);
    res.send(result)
  });
});
//fjern fra database
app.get('/del/:id', function(req, res){
  // res.send('id: ' + req.params.id); 
  var lol2= req.params.id
  var sql3 = "delete from test.test1 where `test` =" + lol2;
  con.query(sql3, function (err, result) {
    if (err){
      res.send("failed to get gud")
    }
    console.log("test", result);
    res.send(result)
  });
});
//update
app.get('/upd/:id', function(req, res){
  // res.send('id: ' + req.params.id); 
  var lol3= req.params.id
  var sql4 = "update test.test1 set " + lol3;
  con.query(sql4, function (err, result) {
    if (err){
      res.send("failed to get gud")
    }
    console.log("test", result);
    res.send(result)
  });
});

app.listen(port, () => {
  console.log(`jeg har mindre en ${port} hjerneseller`)
})