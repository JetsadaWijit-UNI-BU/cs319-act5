console.log("Hello, TypeScript!");

let num1: number = 20;
/* num1 = "Arm"; */
/* num1 = 5.7 */
let num2: number = 47;

let myName: string = "Owen";

function add(x: number, y: number): number {
  let answer = x + y;
  return answer;
}

console.log("Hello " + myName + " number: " + add(num1, num2));
