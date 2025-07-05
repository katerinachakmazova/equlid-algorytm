'use strict'
function findNSD(n1, n2) {
  return (n1%n2===0 ? n2 : findNSD(n2, n1%n2))
}
let answer;
const n1 = 15;
const n2 = 17;

try {
if(!Number.isInteger(n1) || !Number.isInteger(n2)) throw new Error('Numbers should be integers');
if(n1 <= 0 || n2 <= 0) throw new Error ('Numbers should be greater than 0');
answer = findNSD(n1, n2);
} catch (error) {
  answer = error.message;
}
console.log(answer)


