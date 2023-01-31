// Desafio 1 - Crie a função compareTrue
const compareTrue = (p1, p2) => p1 && p2;
// Desafio 2 - Crie a função splitSentence
const splitSentence = (sentence) => sentence.split(' ');

// Desafio 3 - Crie a função concatName - `ultimo item, primeiro item`
const concatName = (arr) => `${arr[arr.length - 1]}, ${arr[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount

// Descobrir qual o maior
const highest = (arr) => {
  let maior;
  for (let v of arr) {
    if (maior === undefined) {
      maior = v;

    } else if (v > maior) {
      maior = v;
    } 
  }
  return maior;
};
console.log(highest([1, 2, 3, 3, 3, 3]))
const highestCount = (arr) => {
  let maior = highest(arr);
  console.log(maior);
  let count = 0;
  // Descobrir quantas vezes o maior aparece
  for (let v of arr) {
    if (v === maior) {
      count += 1;
    }
  }
  return count;
};
console.log(highestCount([1, 2, 3, 3, 3, 3]));
// Desafio 6 - Crie as funções calcTriangleArea(base * altura) / 2), calcRectangleArea(base * altura) e calcAllAreas
const calcTriangleArea = (base, altura) => (base * altura) / 2;
const calcRectangleArea = (base, altura) => (base * altura);
const calcAllAreas = (base, altura, forma) => {
  if (forma === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, altura)}`;
  } if (forma === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, altura)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  // verifica se a distancia do cat1 para o rato é menor
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  // verifica se a distancia é a mesma
  } if (Math.abs(cat1 - mouse) === Math.abs((cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  // condição contrária a primeira
  }
  return 'cat2';
};
// console.log(catAndMouse(1,0,2));
// Desafio 8 - Crie a função fizzBuzz -
// divisívelapenas por 3, por 5 e
// por 3 e 5
const fizzBuzz = (arr) => {
  let retorno = [];
  for (let v in arr) {
    if (arr[v] % 3 === 0 && arr[v] % 5 === 0) {
      retorno[v] = 'fizzBuzz';
    } else if (arr[v] % 3 === 0) {
      retorno[v] = 'fizz';
    } else if (arr[v] % 5 === 0) {
      retorno[v] = 'buzz';
    } else {
      retorno[v] = 'bug!';
    }
  }
  return retorno;
};
// Desafio 9 - Crie a função encode e a função decode
const encode = (sentence) => {
  let arr = '';
  for (let v of sentence) {
    if (v === 'a') {
      arr += '1';
    } else if (v === 'e') {
      arr += '2';
    } else if (v === 'i') {
      arr += '3';
    } else if (v === 'o') {
      arr += '4';
    } else if (v === 'u') {
      arr += '5';
    } else {
      arr += v;
    }
  }
  return arr;
};
// Função decode
const decode = (sentence) => {
  let enigma = '';
  for (let v of sentence) {
    if (v === '1') {
      enigma += 'a';
    } else if (v === '2') {
      enigma += 'e';
    } else if (v === '3') {
      enigma += 'i';
    } else if (v === '4') {
      enigma += 'o';
    } else if (v === '5') {
      enigma += 'u';
    } else {
      enigma += v;
    }
  }
  return enigma;
};
// Desafio 10 - Crie a função techList
const techList = (arr, nome) => {
  let arrobj = [];
  if (arr === null && nome === null) {
    return [];
  }
  if (arr.length === 5) {
    arr.sort();
  }
  for (let v = 0; v < arr.length; v += 1) {
    arrobj[v] = { tech: arr[v], name: nome };
  }
  return arrobj;
};
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],"Lucas"))
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
