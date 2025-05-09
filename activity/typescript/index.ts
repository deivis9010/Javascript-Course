// Ejercicio 1
interface Person {
  name: string;
  age: number;
  profession : string;
}    
const person1: Person = {
  name: "John Doe",
  age: 30,
  profession: "Software Engineer"
};

const arrowFunctionExample = (obj: Person): Array<string|number> => {
  return [obj.name, obj.age, obj.profession];    
}
console.log(arrowFunctionExample(person1)); // ["John Doe", 30, "Software Engineer"]
 // Ejercicio 2
function sumOrConcatenate( parm1: number|string,parm2: number|string): number|string {
    if (typeof parm1 === "number" && typeof parm2 === "number") {
        return parm1 + parm2;
    } else if (typeof parm1 === "string" && typeof parm2 === "string") {
        return `${parm1}-${parm2}`;
    } else {
        return `${parm1}:${parm2}`;
    }
}
console.log(sumOrConcatenate(4, 3)); // --> 7
console.log(sumOrConcatenate(4, "hello")); // --> 4:hello 
console.log(sumOrConcatenate("hello", "world")); // --> hello-world

// Ejercicio 3
interface Car {
  tyres: number;
  turnOnEngine: () => void;
  pressPedal: () => void;
}
interface Motorcycle {
  tyres: number;
   turnOnEngine: () => void;
  openThrottle: () => void;
  
}
function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return (vehicle as Car).pressPedal !== undefined;
}

function startVehicle(vehicle: Car | Motorcycle): void {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal(); 
    } else {
        vehicle.openThrottle();
    }
}  

// Ejemplo de uso
const car: Car = {
  tyres: 4,
  turnOnEngine: () => {
    console.log("Car engine started");
  },
  pressPedal: () => {
    console.log("Car pedal pressed");
  }
};
const motorcycle: Motorcycle = {
  tyres: 2,
  turnOnEngine: () => {
    console.log("Motorcycle engine started");
  },
  openThrottle: () => {
    console.log("Motorcycle throttle opened");
  }
};

startVehicle(car); // Car engine started Car pedal pressed
startVehicle(motorcycle); // Motorcycle engine started Motorcycle throttle opened

// Ejercicio 4
function removeFirstEntry<T extends string | number>(param: T[]): T[] {
  return param.slice(1);
}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];

