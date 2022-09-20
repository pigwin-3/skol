var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dromtorp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO `elev` (`ElevID`, `Fornavn`, `Etternavn`, `programfag`, `Hobby`, `Kjonn`, `data`) VALUES (NULL, 'test', 'test', '3', 'test', 'test', '1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted then edited then deleted");
  });
});