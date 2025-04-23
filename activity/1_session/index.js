

// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2


// Ejercicio 3
/**
 * Genera un array de números del 1 al 100 y registra cada número en la consola.
 */
Array.from({ length: 100 }, (_, i) => i + 1).forEach(num => {
    console.log(num);
  });

// Ejercicio 4
for(var i = 0; i < 101; i++) {
  //Solución
}
  console.log(i);
// Ejercicio 5

// Ejercicio 6
const formatter = {
  prefix: "Hello",
  append: function (_string) {
    console.log(this.prefix + " " + _string);
  }
};
formatter.append("World");

/**
 * Se establece la propiedad "toLowerString" con enumerable en falso para evitar que esta propiedad
 * sea incluida en las iteraciones sobre las propiedades del objeto. Esto previene errores como 
 * "Uncaught TypeError: (a.attributes[o] || '').replace is not a function", que pueden ocurrir 
 * cuando bibliotecas externas (como Prism.js) intentan procesar propiedades no deseadas o no estándar 
 * del objeto durante operaciones como serialización o manipulación de atributos.
 */
Object.defineProperty(formatter, "toLowerString", {
  value(str) { return str.toLowerCase(); },
  enumerable: false
});

console.log(formatter.toLowerString("DEIVISL"));
