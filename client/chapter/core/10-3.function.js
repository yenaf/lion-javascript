/* Functions → Arrow      */


const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
// 에로우펑션은 아규먼츠가 없어여
//rest parameter

let calcAllMoney = (a,b,...args)=>{
  console.log(args);
  // let total = 0;
  // args.forEach((item)=>{
  //   total += item
  // })
  // return total;


  // return args.reduce(function(acc,item){
  //   return acc+item
  // },0)

  return args.reduce((acc,item)=> acc + item ,0)

};
const result = calcAllMoney(1000,500,200,2000);
console.log(result);









// 화살표 함수와 this
//함수 선언문
//constructor(생성자)를 내장하고있다
function normalFunction(){
  console.log(this);//window
}
//함수 표현식
//constructor(생성자)를 내장하고있다
const expressionFunction = function(){
  console.log(this);//window
}

//화살표함수
// constructor(생성자)를 내장하고있지않다.-->그래서 가볍다
// new Object
//생성자함수를 통해 객체를 만들수 있다.
const arrowFunction = ()=>{
  console.log(this);//window
  //부모의 값을 받아서
}



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 