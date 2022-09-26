// Bifurcaciones If - Else

let saldo = 50;
let efectivo = 20;

if (efectivo < saldo) {
  console.log("Verdadero");
}

if (efectivo < saldo) {
  console.log("Verdadero");
} else {
  console.log("Falso");
}

let nota = 5;

if (nota === 5) {
  console.log("Sobresaliente");
} else if (nota === 4) {
  console.log("Esfuerzate un poco más");
} else if (nota === 3) {
  console.log("Por los pelos");
} else if (nota === 2) {
  console.log("Suspenso");
} else if (nota === 1) {
  console.log("Has sacado muy poca nota");
} else if (nota === 0) {
  console.log("No has estudiado nada");
} else {
  console.log("Error, nota solo de 0 a 5");
}
