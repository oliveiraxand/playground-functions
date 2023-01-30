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
  //Descobrir qual o maior
  for(let v of arr){
    if(maior == null){
      maior = v;
    }else if(v > maior){
      maior = v;
    }
  }
  //Descobrir quantas vezes o maior aparece
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
const catAndMouse = (mouse,cat1,cat2) => {
  //verifica se a distancia do cat1 para o rato é menor
  if(mouse-cat1 < mouse-cat2){
    return "cat1";
  //verifica se a distancia é a mesma
  }else if(mouse-cat1 === mouse-cat2){
    return "os gatos trombam e o rato foge";
  //condição contrária a primeira
  }else{
    return "cat2";
  }
}
// Desafio 8 - Crie a função fizzBuzz -  
//divisívelapenas por 3, por 5 e 
//por 3 e 5
const fizzBuzz = (arr) => {
  let retorno = [];
  for(let v of arr){
    if(v % 3 == 0 && v % 5 == 0){
      retorno+="fizzBuzz";
    }else if(v % 3 == 0){
      retorno += "fizz";
    }else if(v % 5 == 0){
      retorno += "buzz";
    }else{
      retorno += "bug!";
    }
  }
  return retorno.split(' ');
} 

// Desafio 9 - Crie a função encode e a função decode
const encode = (sentence) =>{
  let arr ="";
  for(let v of sentence){
    if(v === "a"){
      arr += "1";
    }else if(v === "e"){
      arr += "2";
    }else if(v === "i"){
      arr += "3";
    }else if(v === "o"){
      arr += "4";
    }else if(v === "u"){
      arr += "5";
    }else{
      arr+=v;
    }
  }
  return arr;
} 
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
