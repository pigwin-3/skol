const express = require('express')
const path = require('path');

var mysql = require('mysql');

const app = express()
const port = 3000

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

app.get('/db', (req, res) => {
  con.connect(function(err) {
    console.log("Connected!");
    var sql = "select * from test.test1 order by rand() limit 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("test", result);
      res.send(result)
    });
  });
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`jeg har mindre en ${port} hjerneseller`)
})