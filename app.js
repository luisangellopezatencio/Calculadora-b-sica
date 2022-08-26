const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos") ;
const tres = document.querySelector(".tres");
const cuatro = document.querySelector(".cuatro") ;
const cinco = document.querySelector(".cinco");
const seis = document.querySelector(".seis") ;
const siete = document.querySelector(".siete");
const ocho = document.querySelector(".ocho") ;
const nueve = document.querySelector(".nueve");
const cero = document.querySelector(".cero") ;
const ac = document.querySelector(".ac");
const mas = document.querySelector(".mas");
const menos = document.querySelector(".menos");
const por = document.querySelector(".por");
const div = document.querySelector(".div");
const igualv = document.querySelector(".igual");
const del = document.querySelector(".del");
const ans = document.querySelector(".ans");
let numeros = document.querySelector(".numeros");
let answer = document.querySelector(".answer");
const pun = document.querySelector(".punto");
const paren = document.querySelector(".paren")
const paren2 = document.querySelector(".paren2")
let resp = "0";
function EscribirNumero(num) {
   numeros.textContent = numeros.textContent.concat(num); 
  
}
function igual() {
    answer.textContent = eval(numeros.textContent);
    resp = answer.textContent;
}
function borrartodo() {
    numeros.textContent = "";
}
function borrar(){
    numeros.textContent = numeros.textContent.slice(0, -1); //slice no modifica el string original
}
uno.onclick = function(){
    EscribirNumero("1");
}
dos.onclick = function(){
    EscribirNumero("2");
}
tres.onclick = function(){
    EscribirNumero("3");
}
cuatro.onclick = function(){
    EscribirNumero("4");
}
cinco.onclick = function(){
    EscribirNumero("5");
}
seis.onclick = function(){
    EscribirNumero("6");
}
siete.onclick = function(){
    EscribirNumero("7");
}
ocho.onclick = function(){
    EscribirNumero("8");
}
nueve.onclick = function(){
    EscribirNumero("9");
}
cero.onclick = function(){
    EscribirNumero("0");
}
mas.onclick = function(){
    EscribirNumero("+");
}
menos.onclick = function(){
    EscribirNumero("-");
}
por.onclick = function(){
    EscribirNumero("*");
}
div.onclick = function(){
    EscribirNumero("/");
}
igualv.onclick = function() {
    igual();
}
del.onclick = function(){
    borrar();
}
ans.onclick = function(){
    EscribirNumero(resp);
}
pun.onclick = function(){
    EscribirNumero(".");
}
paren.onclick = function(){
    EscribirNumero("(");
}

paren2.onclick = function(){
    EscribirNumero(")");
}



ac.onclick = function() {
    borrartodo();
}