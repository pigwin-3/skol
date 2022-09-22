console.log("fuck u")
function getRequest(){
    console.log("lol")
    var nem = document.getElementById("test").value;
    fetch('http://localhost:3000/get/' + nem)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(document.getElementById('logger1').innerHTML = "sent the thing");
    
}
//document.getElementById('logger').innerHTML = data

function delRequestt(){
    console.log("lol")
    var nem = document.getElementById("test.2").value;
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
    fetch('http://localhost:3000/upd/' + "%60test2%60='" +  nem2 + "',%60test3%60='" + nem3 + "',%60test4%60='" + nem4 + "'WHERE%60test%60=" + nem)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(document.getElementById('logger').innerHTML = "sent the thing");
}
//`test2`='[value-2]',`test3`='[value-3]',`test4`='[value-4]'WHERE`test`=0
//%60test2%60='[vale-2]',%60test3%60='[value-3]',%60test4%60='[value-4]'WHERE%60test%60=4