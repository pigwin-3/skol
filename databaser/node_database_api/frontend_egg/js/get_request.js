console.log("fuck u")
function getRequest(){
    console.log("lol")
    var nem = document.getElementById("test").value;
    fetch('http://localhost:3000/get/' + nem)
        .then((response) => response.json())
        .then(
            
            data => {
                console.log(data);
                if (data.length > 0) {
        
                  var temp = "<tr><th> test </th><th> test2 </th><th> test3 </th><th> test4 </th></tr>";
                  data.forEach((itemData) => {
                    temp += "<tr>";
                    temp += "<td>" + itemData.test + "</td>";
                    temp += "<td>" + itemData.test2 + "</td>";
                    temp += "<td>" + itemData.test3 + "</td>";
                    temp += "<td>" + itemData.test4 + "</td>";
                  });
                  document.getElementById('TableFind').innerHTML = temp;
                }
            }
        )
        .then((data) => console.log(data))
        .then(document.getElementById('logger1').innerHTML = "sent the thing");
    
}
//document.getElementById('logger').innerHTML = data

function delRequest(){
    console.log("deleting...")
    var nem = document.getElementById("test.2").value;
    console.log('http://localhost:3000/del/' + nem)
    fetch('http://localhost:3000/del/' + nem)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(document.getElementById('logger2').innerHTML = "sent the thing");
}

function updRequest(){
    var nem = document.getElementById("test.3").value;
    var nem2 = document.getElementById("test.4").value;
    var nem3 = document.getElementById("test.5").value;
    var nem4 = document.getElementById("test.6").value;
    fetch('http://localhost:3000/upd/' + "test2='" +  nem2 + "',test3='" + nem3 + "',test4='" + nem4 + "'WHERE test=" + nem)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(document.getElementById('logger3').innerHTML = "sent the thing");
}

function addRequest(){
    var nem = document.getElementById("test.7").value;
    var nem2 = document.getElementById("test.8").value;
    var nem3 = document.getElementById("test.9").value;
    console.log("test")
    console.log(('http://localhost:3000/add/' + nem + "/" + nem2 + "/" + nem3));
    fetch('http://localhost:3000/add/' + nem + "/" + nem1 + "/" + nem2)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(document.getElementById('logger4').innerHTML = "sent the thing");
}
//`test2`='[value-2]',`test3`='[value-3]',`test4`='[value-4]'WHERE`test`=0
//%60test2%60='[vale-2]',%60test3%60='[value-3]',%60test4%60='[value-4]'WHERE%60test%60=4


function tabl() {
    console.log("tbl");
    fetch('http://localhost:3000/get')
        .then((response) => response.json())
        .then(
            
            data => {
                console.log(data);
                if (data.length > 0) {
        
                  var temp = "<tr><th> test </th><th> test2 </th><th> test3 </th><th> test4 </th></tr>";
                  data.forEach((itemData) => {
                    temp += "<tr>";
                    temp += "<td>" + itemData.test + "</td>";
                    temp += "<td>" + itemData.test2 + "</td>";
                    temp += "<td>" + itemData.test3 + "</td>";
                    temp += "<td>" + itemData.test4 + "</td>";
                  });
                  document.getElementById('Table').innerHTML = temp;
                }
            }
        );
}