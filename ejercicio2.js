// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

// - Tu nombre (string)
let name = "Fran";
console.log(name);

// - Tu edad (number)
let age = 35;
console.log(age);

// - ¿Eres desarrollador? (boolean)
let dev = true;
console.log(dev);

// - Tu fecha de nacimiento (Date)
const bdaynum = new Date(1987, 4, 21);
console.log(bdaynum);
const bdaystr = new Date("may 22 1987");
console.log(bdaystr);

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
let favBooks = {
  title: "Juego de tronos",
  author: "George R.R Martin",
  date: 1996,
  url: "https://www.casadellibro.com/libros-juego-de-tronos/193",
};

console.log(favBooks.title);
