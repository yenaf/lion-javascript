/* Functions → Expression  */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}
const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);



//* 함수 선언 → 일반 함수 (표현)식

// let calculateTotal = function(priceA,priceB,priceC,priceD){
//   return priceA + priceB + priceC + priceD;
// };
// const result = calculateTotal(1000,500,200,6500);
// console.log(result);

//우리가 넣은 아규먼트들을 한번에 받아서 사용하는 방법을 알아보겠습니다.
//!함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은? arguments
//arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구해보자



//* for문을 사용하는 방법  */

// let calculateTotal = function(){
//   console.log(arguments);

//   let total = 0;
//   for(let i=0;i<arguments.length;i++){
//     total += arguments[i];
//   }
//   return total;
  
// }
// const result = calculateTotal(1000,500,200,6500);
// console.log(result);

  
//* for~of문을 사용하는 방법 */

// let calculateTotal = function(){
//   console.log(arguments);
  
//   let total = 0;
//   for(let key of arguments){
//     console.log(key);
//     total = total + key;
//   }
  
//   return total;
// }
// const result = calculateTotal(1000,500,200,6500)
// console.log(result);


//* forEach 빌려쓰기*/

//? 잘 모르겠음
// let calculateTotal = function(){
//   let total = 0;
//   Array.prototype.forEach.call(arguments,function(item){
//     total+=item;
//   })
//   return total;

// }
// const result = calculateTotal(1000,500,200,6500);
// console.log(result);


//* slice를 빌려써서 배열로 만들기 */

// let calculateTotal = function(){
//   let total = 0;
//   let realArray = Array.prototype.slice.call(arguments);
//   console.log(realArray);

//   realArray.forEach(item => {
//     total += item;
//   });
//   return total;
// }
// const result = calculateTotal(1000,500,200,6500);
// console.log(result);

// ? 
// Instance Method : 생성자 함수를 통해 생성된 객체만 사용할수 있는 능력
// Object.prototype.hasOwnProperty()
// Object.prototype.isPrototypeOf()
// Object.prototype.setPrototypeOf()
// Object.prototype.toString() 등

// Sratic Method : 객체생성 없이 사용할수 있는 유틸 메서드
// Object.keys()
// Object.values()
// Object.entries()
// Object.freeze() 등


//* Array.from() */

// let calculateTotal =  function(){
//   let total=0;
//   let realArray = Array.from(arguments);
//   realArray.forEach(function(item){
//     total += item;
//   })
//   return total;
// }

// const result = calculateTotal(1000,500,200,6500);
// console.log(result);


//* spread syntax */
// ! ...
// let calculateTotal = function(){
//   let total = 0;
//   let arr = [10,20,30];
//   let realArray = [...arguments,...arr];
//   console.log(realArray);
//   realArray.forEach(item =>{
//     total += item;
//   })

//   return total;
// }

// const result = calculateTotal(1000,500,200,6500);
// console.log(result);



//* Array.reduce 누적*/
//acc 누적값 
//0 초기값
// let calculateTotal = function(){
//   let realArray = [...arguments];
//   return realArray.reduce((acc,item)=>{
//     return acc+item;
//   },0)
  
// }
// const result = calculateTotal(1000,500,200,6500);
// console.log(result);

//* 화살표함수 + reduce
//화살표 함수에는 arguments가 없습니다.

// let calculateTotal = (...args)=>{
//   // let realArray = [...arguments];
//   return args.reduce((acc,item)=>{
//     return acc+item;
//   },0)
  
// }
// const result = calculateTotal(1000,500,200,6500);
// console.log(result);



//* 익명(이름이 없는) 함수 (표현)식
// 함수도 키값을 꺼내쓸수있다. 결국 다 객체이기 때문에
let anonymousFunctionExpression = function(){

};
// console.dir(anonymousFunctionExpression);
// console.log(anonymousFunctionExpression.name);


//* 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){

};
namedFunctionExpression();
// console.log(namedFunctionExpression);




//* 콜백 함수 (표현)식
// let callbackFunctionExpression = function(isActive,success,fail){

//   if(isActive){
//     success();
//     return;
//   }

//   fail();
// };

// callbackFunctionExpression( 
//   true, 
//   function(){ console.log('성공!!') },
//   function(){ console.log('실패!') }
// )



//* https://www.naver.com */
// const movePage = function(url,success,fail){

//   if(url.match(/http.+www/) && typeof url === 'string'){
//     success(url)
//   }else{
//     fail()
//   }
// }


// movePage(
//   // 'http://www.naver.com',
//   'www.naver.com',

//   function(url){
//     console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');
    
//     setTimeout(() => {
//       window.location.href = url
//     }, 3000);
    
//   },
//   function(){
//     console.log('올바르지 않은 주소입니다.');
//   }
// )






// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
let IIFE;

// Immediately Invoked Function Expression
// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.
// JavaScript 함수는 그 자체로 값(literal)
// 함수 값을 즉시 실행 (이름 없이 호출)

//이피패턴
//변수의 보호
//은닉화, incapsulation(캡슐화) 

//클로저 closure


const MASTER = (function (g){

  console.log( g );

  var x = 10;
  let uid = 'Ajttk753!@'

  return {
    getKey(){
      return uid;
    },
    setKey(value){
      uid = value;
    }
  };

})(window)


console.log(MASTER);
console.log(MASTER. setKey('새로운 비밀번호'));


//함수의 선언부 : 매개변수 / 실행부 : 인수
