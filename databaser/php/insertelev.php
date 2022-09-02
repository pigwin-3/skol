<!DOCTYPE html>
<html>
<html lang="no">
<head>
    <title>lez go</title>
</head>
 
<body>
    <center>
        <?php
        $conn = mysqli_connect("localhost", "root", "", "dromtorp");
         
        // funk sql pls
        if($conn === false){
            die("FAEN."
                . mysqli_connect_error());
        }
         
        // skaffer data fra forje side
        $FN =  $_REQUEST['FN'];
        $EN = $_REQUEST['EN'];
        $PF =  $_REQUEST['PF'];
        $HB = $_REQUEST['HB'];
        $KJ = $_REQUEST['KJ'];
        $DA = $_REQUEST['DA'];
         
        $sql = "INSERT INTO `elev` (`ElevID`, `Fornavn`, `Etternavn`, `programfag`, `Hobby`, `Kjonn`, `data`) VALUES (NULL, '$FN', '$EN', '$PF', '$HB', '$KJ', '$DA')";
         
        if(mysqli_query($conn, $sql)){
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
        } else{
            echo "FAEN $sql. "
                . mysqli_error($conn);
        }
        ?>
    </center>
</body>
 
</html>