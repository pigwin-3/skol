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
        $ID =  $_REQUEST['ID'];
         
        $sql = "DELETE FROM `elev` WHERE `ElevID` = '$ID'";
         
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