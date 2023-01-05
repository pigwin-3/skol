//den første oppgaven
class DinAlder {
    constructor(navn, fodselar){
        this.navn = navn
        this.fodselar = fodselar
    }
    matteAlder() {
        //gjør mye matte og gir fra seg litt tekst
        if (((((new Date).getFullYear() - this.fodselar)<15) && ((((new Date).getFullYear() - this.fodselar)>0)) )){
            return (new Date).getFullYear() - this.fodselar + ' år gammel. du er under den kriminelle lavalderen'
        }
        else if ((((new Date).getFullYear() - this.fodselar)>16) && (((new Date).getFullYear() - this.fodselar)<18)){
            return (new Date).getFullYear() - this.fodselar + ' ar gammel. du er over den kriminelle lavalderen'
        }
        else if ((((new Date).getFullYear() - this.fodselar)>17)){
            return (new Date).getFullYear() - this.fodselar + ' år gammel du har stemmerett'
        }
        else if (((new Date).getFullYear() - this.fodselar)<0) {
            return "ikke født enda"
        }
    }
}
let dinAlder = new DinAlder('ola', '2000')

console.log("%cHei, " + dinAlder.navn + "!" + "\n" + "%cDu er " + dinAlder.matteAlder() + ".", "color: green; font-size: 10vh; font-weight: bold;", "font-size: 3vh")

function hei(navn, alder) {
    console.log("test")
    //bruker class din alder til å gjøre årstall til alder
    let dinAlder = new DinAlder(navn, alder)
    //putteer infoen inn i console.log og i dokumentet
    //console.log("%cHei, " + dinAlder.navn + "!" + "\n" + "%cDu er " + dinAlder.matteAlder() + " år gammel.", "color: green; font-size: 10vh; font-weight: bold;", "font-size: 3vh")
    document.getElementById('navnout').innerHTML = "<div style='color: green; font-size: 10vh;'>Hei, " + dinAlder.navn + "!</div>" + "<br>" + "<div style='color: white; font-size: 3vh;'>Du er " + dinAlder.matteAlder() + ".</div>"
}


class Rektangel {
    constructor(lengde, bredde) {
        this.l = lengde
        this.b = bredde
        this.o = (lengde*2)+(bredde*2)
        this.a = lengde*bredde
    }
}

let rektangel = new Rektangel('3', '2');
console.log(rektangel.l + ' ' + rektangel.b + ' ' + rektangel.o + ' ' + rektangel.a);
document.getElementById('rektout').innerHTML = "rektanglet har lengden " + rektangel.l + " og bredden " + rektangel.b + "<br>" + "arealet til rektanglet er " + rektangel.a + "<br> omkretset til rektangelen er " + rektangel.o

//javascript methods er esensielt functions inni en class ig