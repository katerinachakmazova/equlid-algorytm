'use strict'

const inputs = Array.from(document.getElementsByTagName('input'));
const buttonCount = document.querySelector('button')
const answer = document.getElementById('answer');

function turnIntoNumber(str){
  const match = str.match(/\d+(\.\d+)?/);
  const number = match ? Math.round(Number(match[0])) : 0;
  return number;
}

function findNSD(n1, n2) {
  let res = n1%n2;
  return (res===0 ? n2 : findNSD(n2, res))
}

buttonCount.addEventListener('click', (event) => {
  event.preventDefault();
  let n1, n2;
  n1 = turnIntoNumber(inputs[0].value);
  n2 = turnIntoNumber(inputs[1].value);
  answer.removeAttribute('hidden');
  if(n1 === 0 || n2 === 0){
    answer.textContent = 'Please, don\'t enter a 0.'
  }
  else {
    answer.textContent = findNSD(n1, n2);
  }
})
