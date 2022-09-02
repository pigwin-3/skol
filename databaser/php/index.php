
<!DOCTYPE html>
<html lang="no">
   <head>
      <title>elevdata</title>
   </head>
   <body>
      <center>
         <h1>elevdata</h1>
         <?php
        $conn = mysqli_connect("localhost", "root", "", "dromtorp");
         
        // funk sql pls
        if($conn === false){
            die("FAEN."
                . mysqli_connect_error());
        }
         
        $sql = "SELECT * FROM elev";
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
                $row["data"] . 
                "</td>" . "</tr>";
            }
            echo "</table>";
          } else {
            echo "0 results";
          }
        
        ?>
         <h2>optater</h2>
         <form action="updateelev.php" method="post">

            <label for="ID">ElevID:</label>
            <input type="number" name="ID" id="ID" maxlength="10"><br><br>
             
            <label for="FN">fornavn:</label>
            <input type="text" name="FN" id="FN" maxlength="300"><br>

            <label for="EN">etternavn:</label>
            <input type="text" name="EN" id="EN" maxlength="300"><br>

            <label for="PF">programfag:</label>
            <input type="text" name="PF" id="PF" maxlength="3"><br>

            <label for="HB">hobby:</label>
            <input type="text" name="HB" id="HB" maxlength="300"><br>

            <label for="KJ">kjønn:</label>
            <input type="text" name="KJ" id="KJ" maxlength="5"><br>

            <label for="DA">data:</label>
            <input type="number" name="DA" id="DA" maxlength="3"><br>
 
            <input type="submit" value="Submit">
         </form>
         <h2>Insert</h2>
         <form action="insertelev.php" method="post">

            <label for="FN">fornavn:</label>
            <input type="text" name="FN" id="FN" maxlength="300"><br>

            <label for="EN">etternavn:</label>
            <input type="text" name="EN" id="EN" maxlength="300"><br>

            <label for="PF">programfag:</label>
            <input type="text" name="PF" id="PF" maxlength="3"><br>

            <label for="HB">hobby:</label>
            <input type="text" name="HB" id="HB" maxlength="300"><br>

            <label for="KJ">kjønn:</label>
            <input type="text" name="KJ" id="KJ" maxlength="5"><br>

            <label for="DA">data:</label>
            <input type="number" name="DA" id="DA" maxlength="3"><br>
 
            <input type="submit" value="Submit">
         </form>
         <h2>Fjern</h2>
         <form action="deleteelev.php" method="post">

            <label for="ID">ElevID:</label>
            <input type="number" name="ID" id="ID" maxlength="10"><br>
 
            <input type="submit" value="Submit">
         </form>
      </center>
   </body>
</html>