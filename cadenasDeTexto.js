// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre

let nombre = "Francisco José";

// - Otra cadena de texto con tu Apellido

let apellido = "Valiente Torrente";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = `Hola, mi nombre es ${nombre} ${apellido} y soy estudiante de OpenBootcamp`;

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toUpperCase();

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante.toLowerCase();

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let estudianteCountLetters = estudiante.length;

// - Una variable que contenga la primera letra del Nombre

let nombreFirstLetter = nombre.charAt(0);
let nombreFirstLetter2 = nombre[0];

// - Otra variable que contenga la última letra del Apellido

let apellidoLastLetter = apellido.slice(-1);
console.log(apellidoLastLetter);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

let estudianteNoSpace = estudiante.replaceAll(" ", "");

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let isNombreTrue = estudiante.includes(`${nombre}`);
