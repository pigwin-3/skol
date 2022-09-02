# første databaseoppgave
## oppgave 1
### a
Jeg kopierte tabellen inn i et program så fikk jeg en ferdiglaget sql spørring. Jeg kunne deretter redigere den litt for å få den til å passe min spesefike bruk. https://tableconvert.com/ <-- veldig prakrisk
## oppgave 2
### a
```sql
SELECT * FROM `elev` WHERE `Kjonn` = 'j'
```
| ElevID | Fornavn | Etternavn | Klasse | Hobby     | Kjonn |
|--------|---------|-----------|--------|-----------|-------|
|      2 | Linn    | Jensen    |      2 | Gaming    | J     |
|      3 | Lise    | Olsen     |      1 | Strikking | J     |
|      4 | Eva     | Yttergård |      2 | Gaming    | J     |
|      8 | Jenny   | Gullaug   |      4 | Band      | J     |
|     10 | Hanna   | Ullevik   |      4 | Fotball   | J     |

ved å bruke Where så leter den etter steder hvor den kan finne den samme verdien.
### b
```sql
SELECT * FROM `elev` WHERE `Kjonn` = 'g' AND `Klasse` = '2'
```
| ElevID | Fornavn | Etternavn | Klasse | Hobby     | Kjonn |
|--------|---------|-----------|--------|-----------|-------|
|      5 | Martin  | Hjelle    |      2 | Strikking | G     |
|      9 | Bjarte  | Ås        |      2 | Band      | G     |

Man kan bruke AND for å ha flere variabler
### c
```sql
SELECT * FROM `elev` WHERE `Kjonn` = 'j' AND `Klasse` = '2';
```
2 jenter er i 2 klasse.
### d
```sql
SELECT * FROM `elev` WHERE `Fornavn` LIKE 'J%';
```
| ElevID | Fornavn | Etternavn  | Klasse | Hobby  | Kjonn |
|--------|---------|------------|--------|--------|-------|
|      7 | Joakim  | Fredriksen |      1 | Løping | G     |
|      8 | Jenny   | Gullaug    |      4 | Band   | J     |

Istedenfor å bruke = så bruker man like for å finne ting som er nerme til. vi bruker % til å symbolisere hva som helst
### e
```sql
SELECT * FROM `elev` WHERE `Fornavn` LIKE 'M%' AND `Klasse` = '2';
```
| ElevID | Fornavn | Etternavn | Klasse | Hobby     | Kjonn |
|--------|---------|-----------|--------|-----------|-------|
|      5 | Martin  | Hjelle    |      2 | Strikking | G     |
### f
```sql
SELECT * FROM `elev` WHERE `Hobby` = 'fotball';
```
| ElevID | Fornavn | Etternavn | Klasse | Hobby   | Kjonn |
|--------|---------|-----------|--------|---------|-------|
|      1 | Thomas  | Hansen    |      1 | Fotball | G     |
|     10 | Hanna   | Ullevik   |      4 | Fotball | J     |
## oppgave 3
ferdig
| data id | årsmodel | brand |
|---------|----------|-------|
|       1 |     2001 | HP    |
|       2 |     1989 | DELL  |
|       3 |        0 | stein |

Her ser du hvordan jeg ville at oppsettet til data tablen blir
## oppgave 4
ferdig...
| ElevID | Fornavn | Etternavn  | programfag | Hobby     | Kjonn | data |
|--------|---------|------------|------------|-----------|-------|------|
|      1 | Thomas  | Hansen     |          1 | Fotball   | G     |    1 |
|      2 | Linn    | Jensen     |          2 | Gaming    | J     |    3 |
|      3 | Lise    | Olsen      |          1 | Strikking | J     |    3 |
|      4 | Eva     | Yttergård  |          2 | Gaming    | J     |    3 |
|      5 | Martin  | Hjelle     |          2 | Strikking | G     |    2 |
|      6 | Bjarne  | Utvik      |          3 | Håndball  | G     |    1 |
|      7 | Joakim  | Fredriksen |          1 | Løping    | G     |    2 |
|      8 | Jenny   | Gullaug    |          4 | Band      | J     |    2 |
|      9 | Bjarte  | Ås         |          2 | Band      | G     |    1 |
|     10 | Hanna   | Ullevik    |          4 | Fotball   | J     |    2 |
## oppgave 5
```sql
ALTER TABLE `elev` ADD CONSTRAINT `kobling data` FOREIGN KEY (`data`) REFERENCES `data`(`data id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
```
vi bruker constraints fordi det gjør sammenkoblingene mer effektive og gjør slik at vi får tak i dataen som man trenger med færre problemer og raskere.
## oppgave 6
```sql
SELECT data.arsmodel, data.brand, elev.Fornavn, elev.Etternavn, elev.ElevID FROM elev
INNER JOIN data
ON elev.data = data.dataid WHERE Fornavn IN ('Martin', 'Hanna');
```
| ElevID | Fornavn | Etternavn | arsmodel | brand |
|--------|---------|-----------|----------|-------|
|      5 | Martin  | Hjelle    |     1989 | DELL  |
|     10 | Hanna   | Ullevik   |     1989 | DELL  |

ved bruk av inner join så kan jeg  velge ting fra andre databaser og relatere det til denne.
## oppgave 7
```sql
SELECT * FROM elev ORDER BY Fornavn
```
| ElevID | Fornavn # 1 | Etternavn  | programfag | Hobby     | Kjonn | data |
|--------|-------------|------------|------------|-----------|-------|------|
|      6 | Bjarne      | Utvik      |          3 | Håndball  | G     |    1 |
|      9 | Bjarte      | Ås         |          2 | Band      | G     |    1 |
|      4 | Eva         | Yttergård  |          2 | Gaming    | J     |    3 |
|     10 | Hanna       | Ullevik    |          4 | Fotball   | J     |    2 |
|      8 | Jenny       | Gullaug    |          4 | Band      | J     |    2 |
|      7 | Joakim      | Fredriksen |          1 | Løping    | G     |    2 |
|      2 | Linn        | Jensen     |          2 | Gaming    | J     |    3 |
|      3 | Lise        | Olsen      |          1 | Strikking | J     |    3 |
|      5 | Martin      | Hjelle     |          2 | Strikking | G     |    2 |
|      1 | Thomas      | Hansen     |          1 | Fotball   | G     |    1 |

ved å bruke ORDER BY så kan jeg besteme hva den sorterer med
## oppgave 8
```sql
SELECT programfag, COUNT(programfag) FROM elev GROUP BY programfag HAVING COUNT(programfag) > 1 ORDER BY 'programfag';
```
| programfag | COUNT(programfag) |
|------------|-------------------|
|          1 |                 3 |
|          2 |                 4 |
|          4 |                 2 |

Her starter jeg men å velkge programfag og mengden programfag jeg gruperer svarene basert på programfag slik at jeg ikke bare får 10. Til slutt så sorterer jeg det etter programfag IDen
## oppgave 9
```sql
UPDATE `elev` SET `Hobby`='updates i sql' WHERE `ElevID` = 7;
```
| ElevID | Fornavn | Etternavn  | programfag | Hobby         | Kjonn | data |
|--------|---------|------------|------------|---------------|-------|------|
|      7 | Joakim  | Fredriksen |          1 | updates i sql | G     |    2 |

Jeg brukte UPDATE...
## oppgave 10
```sql
INSERT INTO elev (ElevID, Fornavn, Etternavn, programfag, Hobby, Kjonn, data) VALUES (NULL, 'råger', 'halama', '2', 'male med rødt', 'g', '3')
```
| ElevID | Fornavn | Etternavn | programfag | Hobby         | Kjonn | data |
|--------|---------|-----------|------------|---------------|-------|------|
|     11 | råger   | halama    |          2 | male med rødt | g     |    3 |

første steget men mindre...
## oppgave 11
```sql
DELETE FROM `elev` WHERE ElevID = 11;
```
https://youtu.be/ulakMBcqyPo
| ElevID | Fornavn | Etternavn | programfag | Hobby | Kjonn | data |
|--------|---------|-----------|------------|-------|-------|------|


ok jeg vet at den tabelen var ubrukelig men ja jeg ville

nå maler vi med rød råger måtte dø
## oppgave 12
For denne så brukte jeg en mix av "phpintro" oppgaven fra i fjord og "login3" (mappe navn).

jeg putta dett i starten av <php i alle dokumentene som koblet seg til databasen. her valgte jeg å ikke bruke variabler som vi gjorde i fjord men bare skrive direkte inn.
```php
$conn = mysqli_connect("localhost", "root", "", "dromtorp");
```

Jeg brukte dette fra "phpintro" for å lage tabelen som jeg har på alle sidene. Som du ser så endra jeg den slik at den passa dette prosjektet
```php
$sql = "SELECT elev.ElevID, elev.Fornavn, elev.Etternavn, elev.programfag, elev.Hobby, elev.Kjonn, data.brand, data.arsmodel FROM elev INNER JOIN data ON elev.data = data.dataid ORDER BY elev.ElevID ASC;";
$result = $conn->query($sql);

if (mysqli_num_rows($result) > 0) {
    echo "<table border=1><th>ElevID</th><th>Navn</th><th>Programfag</th><th>Hobby</th><th>Kjønn</th><th>Data</th>";
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo 
        "<tr>" . "<td>" . 
        $row["ElevID"]. 
        "</td><td>" .
        $row["Fornavn"]. " " . $row["Etternavn"]. 
        "</td><td>" .
        $row["programfag"]. 
        "</td><td>" .
        $row["Hobby"]. 
        "</td><td>" .
        $row["Kjonn"]. 
        "</td><td>" .
        $row["brand"] . "  " . $row["arsmodel"] .
        "</td>" . "</tr>";
    }
    echo "</table>";
  } else {
    echo "0 results";
  }
```
Deretter lagde jeg en form jeg kunne endre til hva jeg trenger den til.
```php
<h2>funksjon</h2>
<form action="funksjon.php" method="post">

<label for="ID">ElevID:</label>
<input type="number" name="ID" id="ID" maxlength="10"><br><br>

<input type="submit" value="Submit">
</form>
```
På den neste siden brukte jeg tabelen som du så tiligere. Jeg henta dataen fra tabelen på forje side med denne linjen jeg endra den for de andre tingene jeg henta fra formen. Dette var det jeg tokk fra "login3" oppgaven i fjord.
```php
$ID =  $_REQUEST['ID'];
```
Deretter tok jeg å sente en SQL Querry.
```php
$sql = "HVA `elev` GJØR `tabel`='$ID' WHERE `ElevID` = '$ID'";
```
om den klarte å sende Querryen ville den vist en tabel med den optaterte infoen. Hvis den ikke klarer å sende daten vil den vise erroren den fikk fra MySQL.

du kan prøve den her (kan hende at den ikke er permanent)
https://test.binders.net/skole/SQLshit/
## oppgave 12 node js
```js
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
  var sql = "UPDATE `elev` SET Etternavn = testson WHERE Fornavn = 'test'";
  var sql = "DELETE FROM `elev` WHERE Fornavn = 'test'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted then edited then deleted");
  });
});
```

det funker...