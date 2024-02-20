const km = parseInt(prompt("Inserisci i km da percorrere"));
const eta = parseInt(prompt("Inserisci l'età del passeggero"));
const rate = 0.21;

let ticket = km * rate;

if(eta < 18){
    ticket -= ticket * 0.20;
}else if(eta > 65){
    ticket -= ticket * 0.40;
}
ticket = ticket.toFixed(2);

document.getElementById('output').innerHTML += ticket;
