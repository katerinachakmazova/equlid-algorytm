'use strict'
function findNSD(n1, n2) {
  return (n1%n2===0 ? n2 : findNSD(n2, n1%n2))
}
const n1 = 34;
const n2 = 17;
try {
  if(Math.round(n1) === 0 || Math.round(n2) === 0) throw new Error ('Number can\'t be a zero')
  console.log(findNSD(Math.round(n1), Math.round(n2)));
} catch (error) {
  console.log(error.message)
}


