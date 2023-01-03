//1a
var test = 8;
document.getElementById('out1').innerHTML = test;
console.log(test)
//1b
var test = "testverdi"
document.getElementById('out2').innerHTML = test;
console.log(test)
//1c
var produkt = 2 * 3
document.getElementById('out3').innerHTML = produkt;
console.log(produkt)
//1d
var broek = 2 / 3
document.getElementById('out4').innerHTML = broek;
console.log(broek)

//2a
function rektangel() {
    var rekt = 8 * 8
    document.getElementById('out5').innerHTML = rekt;
}
//2b
function trekant() {
    console.log(tre1.value, tre2.value)
    var rekt = (tre1.value * tre2.value) / 2
    document.getElementById('out6').innerHTML = rekt;
}
function areal() {
    console.log(a1.value, a2.value)
    var rekt = a1.value * a2.value
    var tre = rekt / 2
    document.getElementById('out7').innerHTML = "rektangel areal = " + rekt + " trekant areal = " + tre;
}
function nors(){
    console.log(ns.value)
    if (ns.value == "n") {
        console.log("norge")
        document.getElementById('out8').innerHTML = "norge";
    }
    else if (ns.value == "s") {
        console.log("sverie")
        document.getElementById('out8').innerHTML = "sverie";
    }
    else if (ns.value == "d") {
        console.log("dansk")
        document.getElementById('out8').innerHTML = "danmark";
    }
    else {
        console.log("fucka u")
        document.getElementById('out8').innerHTML = "nei";
    }
}
function starthighlow(){
    console.log("shl")
    document.getElementById('highlowdiv').innerHTML = '<input type="text" name="tall" id="tall"><button onclick="highlow()" id="hl">prøv tall</button>';
    sessionStorage.setItem("num", Math.floor(Math.random() * 51));
    console.log(sessionStorage.getItem("num"))
}
function highlow() {
    console.log(tall.value)
    if(sessionStorage.getItem("num") == tall.value){
        document.getElementById('out9').innerHTML = "riktig";
    }
    else if(sessionStorage.getItem("num") >= tall.value){
        document.getElementById('out9').innerHTML = "høyere";
    }
    else if(sessionStorage.getItem("num") <= tall.value){
        document.getElementById('out9').innerHTML = "lavere";
    }
}