class DinAlder {
    constructor(navn, fodselar){
        this.navn = navn
        this.fodselar = fodselar
        this.alder = (new Date).getFullYear() - fodselar
    }
}
let dinAlder = new DinAlder('ola', '2000')

console.log("%cHei, " + dinAlder.navn + "!" + "\n" + "%cDu er " + dinAlder.alder + " år gammel.", "color: green; font-size: 10vh; font-weight: bold;", "font-size: 3vh")