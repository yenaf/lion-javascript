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


//* 함수 선언 → 화살표 함수 (표현)식
// 에로우펑션은 아규먼츠가 없어여
//rest parameter

let calcAllMoney = (a,b,...args)=>{
  // console.log(args);
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
// console.log(result);






//* 화살표 함수와 this

//*함수 선언문
//constructor(생성자)를 내장하고있다
// function normalFunction(){
  // console.log(this);//window
// }

//*함수 표현식
// constructor(생성자)를 내장하고있다
// const expressionFunction = function(){
  // console.log(this);//window
// }

//*화살표함수
// constructor(생성자)를 내장하고있지않다.-->그래서 가볍다
// new Object
//생성자함수를 통해 객체를 만들수 있다.
// const arrowFunction = ()=>{
  // console.log(this);//window
  //부모의 값을 받아서
// }

//! nodelist 유사배열 , nodelist는 forEach사용이 가능하다.
//! 일반함수 : 나를 호출한 대상을 this로 바인딩합니다.
//! 화살표함수 : this를 바인딩 하지 않음. 찾아야한다면 내 부모(상위 컨텍스트=환경)꺼 가져옴.





//객체 안에서 this
// 객체지향프로그래밍
// 함수지향프로그래밍
//객체의 메서드를 정의할때는 화살표 함수보다 일반함수가 더 좋은거 아닌가요? yes!!
//메서드 안에서 함수를 호출할때는 화살표 함수가 더 좋다.


// this를 왜 쓰는지

const user={
  total : 0,
  name : 'tiger',
  age : 32,
  address : '서울시 중랑구 면목동',
  grade : [80,90,100],
  totalGrades : function(){

    this.grade.forEach((item)=>{
      this.total += item ;
    })
    console.log(this.total);
  }

  
  // totalGrades : function(){
  //   console.log(this);//나를 호출한 대상이 this에 담긴다.
  //   this.grade.forEach((item)=>{
  //     // this.total +=item;
  //     console.log(this);
  //   })

  }

  // totalGrades(){//컨사이드 메서드?? :,function생략가능
  //   console.log(this);//나를 호출한 대상이 this에 담긴다.
  // }
// }
console.log(user.totalGrades());


//함수안에서 변수를 찾는방법
// 내가 있는 { } 중괄호 안
// 그 위 { } 중괄호 안
// 매개변수 안











const a = document.querySelector('nav li:nth-child(1) button');
const nav = document.querySelectorAll('nav li button');
a.addEventListener('click',(e)=>{

  // e.currentTarget
  // this.classList.add('is-active');
  // console.log(this);

})



// a.addEventListener('click',function(){
//   a.classList.add('is-active');
// })
// a.addEventListener('click',function(){
//   a.classList.add('is-active');
// })
// a.addEventListener('click',function(){
//   a.classList.add('is-active');
// })


// nav.forEach((button)=>{



//   button.addEventListener('click',()=>{
//     // this.classList.add('is-active');
//     console.log(this);
//   })




// })



























/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 