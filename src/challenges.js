// Desafio 1 - Crie a função compareTrue
const compareTrue = (p1,p2) =>{
  return p1 && p2;
}
// Desafio 2 - Crie a função splitSentence
const splitSentence = (sentence) =>{
  return sentence.split(' ');
}

// Desafio 3 - Crie a função concatName - `ultimo item, primeiro item`
const concatName = (arr) =>{
  return `${arr[arr.length -1]}, ${arr[0]}`;
}

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins,ties) =>{
  return (wins*3) + ties;
}

// Desafio 5 - Crie a função highestCount
const highestCount = (arr) => {
  let maior;
  let count = 0 ;
  for(let v of arr){
    if(maior == null){
      maior = v;
    }else if(v > maior){
      maior = v;
    }
  }
  for(let v of arr){
    if(v === maior){
      count++;
    }
  }
  return count;
}

// Desafio 6 - Crie as funções calcTriangleArea(base * altura) / 2), calcRectangleArea(base * altura) e calcAllAreas
const calcTriangleArea = (base,altura) =>{
  return (base*altura) / 2;
}
const calcRectangleArea = (base,altura) =>{
  return (base * altura);
}
const calcAllAreas = (base,altura,forma) =>{
  if(forma == "triângulo"){
    return `O valor da área do triângulo é de: ${calcTriangleArea(base,altura)}`;
  }else if (forma == "retângulo"){
    return `O valor da área do retângulo é de: ${calcRectangleArea(base,altura)}`;
  }else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
  }
}
// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

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
