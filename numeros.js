// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

let heightCm = 175;

// - Una variable que contenga tu altura en metros (número de coma flotante)

let heightM = 1.75;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

let weight = 79.5;

// - Una variable que contenga tu altura en metros redondeada hacia arriba

let heightAproxUp = Math.round(heightM);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let weightAproxDwn = Math.floor(weight);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let max = Number.MAX_VALUE == Number.MAX_VALUE + 1;

console.log(max);
