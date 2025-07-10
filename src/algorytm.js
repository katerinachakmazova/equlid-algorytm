'use strict'
function findNSD(n1, n2) {
  try {
    if(!Number.isInteger(n1) || !Number.isInteger(n2)) throw new Error('Error: numbers must be integers');
    if(n1 <= 0 || n2 <= 0) throw new Error ('Error: numbers must be bigger than 0')
    return (n1%n2===0 ? n2 : findNSD(n2, n1%n2))
  } catch (error) {
    return error.message;
  }
}
const n1 = 280;
const n2 = 120;
console.log(findNSD(n1, n2))


