/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// function getRandomValue(){
//   return Math.random() > 0.5 ? 1 : 0;
// }

// 함수 선언
// function calcSumPrice(
//   priceA,
//   priceB,
//   priceC = 0,
//   priceD = getRandomValue()
//   ){

  // if(typeof priceC === 'undefined'){
  //   priceC = 0;
  // }

  // if(!priceC) priceC=0;

  // priceC ||= 0;

  // priceC ??= 0;

  //아무런 값도 전달하지 않았을때 인수를 전달하지 않았을때
  //조건처리를 통해서 확인하는 과정을 밸리데이션이라고 한다
//   if(!priceA || !priceB){
//     throw new Error('calcPricc 함수에 첫 번째와 두 번째 매개변수는 필수 입력 값입니다.');
//   }

//   return priceA + priceB + priceC + priceD;
// }

// const result = calcSumPrice(); // 함수 호출

// 함수 값 반환
// console.log(result);

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건





/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
//rem이라는 함수는 pxValue,base라는 매개변수를 받고 pxValue는 숫자또는문자 base는 숫자
//완성된 함수는 문자형태로 값을 퉤 뱉어야한다

// let rem;

function rem(pxValue,base = 16){
  // if(typeof pxValue === 'string'){
  //   pxValue = parseInt(pxValue,10); 
  // }


  typeof pxValue === "string" && (pxValue = parseInt(pxValue,10));

  //인수값이 없을때 
  if(!pxValue) throw new Error('rem함수의 첫번째 인수는 필수 입력 값입니다.')


  return (pxValue/base) +'rem';
}

console.log(rem('20px',16));


// 1. 함수이름
// 2. validation
// 3. return value
// 4. parameter, argument
// 5. test [Test Driven Development]
console.assert(rem('20px')==='1.25rem');
console.assert(rem('30px',16)==='1.25rem'); //간단하게 테스트 해보기





// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.