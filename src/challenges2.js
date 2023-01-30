// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (arr) =>{
  let erroMsg ="não é possível gerar um número de telefone com esses valores";
  //Verifica se é diferente de 11
  if(arr.length !== 11){
    return erroMsg;
  }
  //Verifica se o mesmo numero se repete 3x ou 
  let count = 0;
  for(let v of arr){

  }
  //verifica se existe um numero menor que 0 ou maior que 9
  for(let v of arr){
    if(v>9 || v<0){
      return erroMsg;
    }
  }
  //**TEMPLATE LITERALS** (12) 34567-8901
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;

}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
