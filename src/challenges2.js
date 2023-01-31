// Desafio 11 - Crie a função generatePhoneNumbera

// Verifica Quantas vezes o número se repete
const forVerifyTimes = (arr, i) => {
  let count = 0;
  for (let u = 0; u < arr.length; u += 1) {
    if (arr[u] === arr[i]) {
      count += 1;
    }
  }
  return count;
};
// Verifica se o mesmo numero se repete 3x ou
const verify3Times = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    count = forVerifyTimes(arr, i);
    if (count > 2) {
      return true;
    }
  }
  return false;
};

// verifica se existe um numero menor que n1 ou maior que n2
const lessBigger = (n1, n2, arr) => {
  for (let v of arr) {
    if (v > 9 || v < 0) {
      return true;
    }
  }
  return false;
};
const generatePhoneNumber = (arr) => {
  let erroMsg = 'não é possível gerar um número de telefone com esses valores';
  // Verifica se é diferente de 11
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // Verifica se o mesmo numero se repete 3x ou
  if (verify3Times(arr)) {
    return erroMsg;
  }
  // verifica se existe um numero menor que 0 ou maior que 9
  if (lessBigger(0, 9, arr)) {
    return erroMsg;
  }
  //* *TEMPLATE LITERALS** (12) 34567-8901
  let ddd = `${arr[0]}${arr[1]}`;
  let leftNumbers = `${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}`;
  let rightNumbers = `${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
  return `(${ddd}) ${leftNumbers}-${rightNumbers}`;
};
// Desafio 12 -  Crie a função triangleCheck
// Descobrir se a medida de um dos lados é menor que a soma e maior que a diferença
const measureLessAndBigger = (nA, nB, nC) => nA < (nB + nC) && nA > Math.abs(nB - nC);
// Descobrir se algum lado é menor
const anySideLess = (nA, nB, nC) => nA < (nB + nC) && nB < (nA + nC) && nC < (nA + nB);
const triangleCheck = (nA, nB, nC) => {
  if (measureLessAndBigger(nA, nB, nC)) {
    return true;
  } if (anySideLess(nA, nB, nC)) {
    return true;
  }
  return false;
};
console.log(triangleCheck(10, 14, 8));
// Desafio 13 - Crie a função hydrate
const hydrate = (sentence) => {
  let r = /\d+/g;
  let arrI = sentence.match(r);
  let soma = 0;
  for (let v of arrI) {
    soma += parseInt(v, 10);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
};
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
