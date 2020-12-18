let nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;
let d = z + w;

maFonction();

let div = document.createElement("div");
div.id = "demo"
document.body.append(div);
div.innerHTML = "z vaut " + z + " et w vaut " + w + ", le résultat est " + (z + w);

alert(d);

let prenom = "John", nom = "doe", age = "35";

alert(z * w);
alert(w / 2);
alert(15 % 9);

let l = 10, k = 5;
l+= k;

function maFonction() {
    alert("salut tout le monde");
}

function maFonctionDeRetour() {
    document.getElementById("demoRetour").innerHTML = "Bonjour!";
}

maFonctionDeRetour();

document.getElementById("monBoutton").addEventListener("click", function () {
    alert();
});

let div2 = document.createElement("div");
div2.style.height = "100px"
document.body.append(div2);

div2.addEventListener("mouseover", function () {
    div2.style.backgroundColor = "red";
})

let txt = "une longue phrase";

alert(txt);

let str1 = "Bonjour", str2 = "le monde";

alert(str1 + " " + str2);

let listeVoitures = ["Renault", "Volvo", "Citroen"];
let maVoiture = listeVoitures[1];

listeVoitures.splice(0, 1, "Ford");

alert(listeVoitures.length);

listeVoitures.pop();

listeVoitures.push("Ferrari");

let rNumber = Math.trunc(Math.random()*10);

let fNumber = Math.trunc(15.7);

let nombreUn = 10, nombreDeux = 5;

if(nombreUn > nombreDeux) {
    alert("nombreUn est supérieur à nombreDeux");
}

let nombreTrois = 5, nombreQuatre = 5;

if(nombreTrois === nombreQuatre) {
    alert("nombreTrois est égal à nombreQuatre");
}

if(nombreUn !== nombreDeux) {
    alert("nombreUn n'est pas égal à nombreDeux");
}

for(let x = 0; x < 9; x++) {
    console.log(x);
}

let fruit = ["pomme", "banane", "poire"];

for(let y = 0; y < fruit.length; y++) {
    console.log(fruit.indexOf(fruit[y]));
}

let i = 0
while(i < 10) {
    i++
}

while(i < 10) {
    i+=2
}

for(let h = 0; h < 10; h++) {
    if(h === 5){
        alert("On est à 5");
    }
}