// Ejercicio 1
//Crea una arrow function que reciba un objeto y retorne un array con los valores de las propiedades del objeto.

let person ={
  name: "Lucas",
  age: 27,
  profession:"Developer",
  }
// return -> [name, age, profession]

  let myArrowFunction = ({ name, age, profession }) => [name, age, profession];

  console.log(myArrowFunction(person)); // [ 'Lucas', 27, 'Developer' ]
  
  

// Ejercicio 2
// Valores de "this" en diferentes contextos
// 1. contexto global,
console.log("this en el contexto global: ", this); // window en el navegador

// 2. modo estricto,
function  strictMode() {
    "use strict";
    console.log("this en modo estricto: ", this); 
  }
  strictMode(); // undefined

// 3. objeto proprietario,
let myObject = {
    name: "Deivis",
    age: 34,
    profession: "Developer",
    getName: function () {
      console.log("this en el contexto de un objeto: ", this.name);
    },
  };
  
  myObject.getName(); // Deivis 


// 4. contexto de arrow function,
/**
 *  
 * Las arrow functions no tienen su propio contexto de `this`; en su lugar, heredan 
 * el valor de `this` del ámbito léxico que las rodea en el momento en que son definidas. 
 * Esto significa que el valor de `this` se determina por el lugar donde se escribe 
 * la arrow function, no por el lugar donde se invoca. Si se definió un valor para 
 * `this` en el contexto que la rodea, este valor persistirá y será utilizado dentro 
 * de la arrow function.
 * 
 * Nota: Si `this.name` no está definido en el contexto que rodea a la arrow function, 
 * se registrará como `undefined`.
 * ejemplo: si  antes de la arrow function se define un objeto con una propiedad `name`,
 * el valor de `this.name` dentro de la arrow function será el valor de esa propiedad.
 */
let myArrowFunctionThis = () => {
   
    console.log("this en el contexto de una arrow function: ", this.name);
    
  };
  
  myArrowFunctionThis(); // undefined
  

// 5. contexto de evento.
//<button class="custom-button" id="ejercicio-2" onclick="thisOnEvent(this)">this on event</button>
function thisOnEvent (event) {
    console.log("this en el contexto de un evento: ", event);
  };
    

// 6. contexto de binding  (call, apply, bind).
let person2 = {
    name: "Jose"    
  };  
 function getName() {
    console.log("this en el contexto de binding: ", this.name);
  }  
  getName.call(person2); // Jose
  

  



// Ejercicio 3
class InvertirCadena {
  cadenaInvertir = "";    
  
    invertir() {
      if(this.cadenaInvertir === "") {
        throw new Error("La cadena está vacía");
      }

      return this.cadenaInvertir.split("").reverse().join("");
    }
  }

  const invertirCadena = new InvertirCadena();
  try {
    console.log(invertirCadena.invertir()); 
  }
  catch (error) {
    console.error(error.message); // La cadena está vacía
  }
  invertirCadena.cadenaInvertir = "Hola Mundo";
  try {
    console.log(invertirCadena.invertir()); // odnuM aloH
  }
  catch (error) {
    console.error(error.message); 
  }
   
  invertirCadena.nuevoMetodo?.();

// Ejercicio 4
class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") {
      alert("El usuario está logeado");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
}

let login = new Login("admin", "passwd") // alert -> User logged in
let logbad = new Login("pepe", "bad") // alert -> User or passwd incorrect

login.login(); // alert -> User logged in
logbad.login(); // alert -> User or passwd incorrect


// Ejercicio 5
function loginSuccessClick() {  
  let login = new Login("admin", "passwd") // alert -> User logged in
  login.login(); // alert -> User logged in

}
function loginErrorClick() {  
  let logbad = new Login("pepe", "bad") // alert -> User or passwd incorrect
  logbad.login(); // alert -> User or passwd incorrect
}  

document.getElementById("loginSuccess").addEventListener("click", loginSuccessClick);
document.getElementById("loginFailure").addEventListener("click", loginErrorClick);

// Ejercicio 6
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

//Usando la promesa
 document.getElementById("loginSuccessAsync").addEventListener("click", ()=> {
     loginWitUsername("admin", "passwd")
      .then((response) => {
        alert(response); // User logged in
      })
      .catch((error) => {
        alert(error); // Error: invalid username or password
      });
  });
  //usando async/await
 document.getElementById("loginFailureAsync").addEventListener("click", async ()=> {
 try {
    const response = await loginWitUsername("pepe", "bad");
    alert(response);
  } catch (error) {
    alert(error); // "Error: invalid username or password"
  }
});