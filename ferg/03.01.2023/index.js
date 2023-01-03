//Deklarerer en klasse som heter klassenavn
class Klassenavn {
    constructor(programfag, klassetrinn){
        this.programfag = programfag
        this.klassetrinn = klassetrinn
    }
}
//lager en instans av klassen
let i2ta = new Klassenavn('informasjonsteknologi', 'vg2')

console.log(i2ta)

//sirkel
class sirkel {
    constructor(radius) {
        this.radius = radius
        this.diameter = radius * 2
        /*this.omkrets = 2 * Math.PI * radius
        this.areal = Math.PI * radius * radius*/
    }
finnOmkrets() {
    return (this.diameter * Math.PI)
}
finnAreal() {
    return (Math.PI*(this.radius * this.radius))
}
}
/*
let sirkelExample = new sirkel(3);

let omkrets_av_sirkel = sirkelExample.finnOmkrets();
console.log('omkrets i meter: ' + omkrets_av_sirkel.toFixed(2))

let areal_av_sirkel = sirkelExample.finnAreal();
console.log('areal i kvadratmeter: ' + areal_av_sirkel)
*/
class sylinder extends sirkel{
    constructor(radius, hoyde) {
        super(radius);
        this.hoyde = hoyde
    }

    finnVolum() {
        let areal_sirkel = this.finnAreal()
        let volum_sylinder = areal_sirkel * this.hoyde
        return volum_sylinder;
    }
}

let sylinderInstanse = new sylinder(3, 4);
let volum_av_sylinder = sylinderInstanse.finnVolum();
console.log('%c' + volum_av_sylinder, 'background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet); color: #ffffff; -webkit-text-stroke: 0.15vh #000000; font-size: 3vh;')