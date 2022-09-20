console.log("fuck u")
function getRequest(){
    console.log("lol")
    var nem = document.getElementById("test").value;
    fetch('http://localhost:3000/get/' + nem)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
function delRequestt(){
    console.log("lol")
    var nem = document.getElementById("test.2").value;
    fetch('http://localhost:3000/del/' + nem)
        .then((response) => response.json())
        .then((data) => console.log(data));
}