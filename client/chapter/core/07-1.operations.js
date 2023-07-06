/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상
const a = '10';
const b = '30';

// 단항 연산자
let unary = +a;
console.log(unary);

// 이항 연산자
let binary = a + b;
console.log(binary);

// 삼항 연산자식
// let ternary = a===10 ? true : false;
let ternary = Math.random() > 0.5 ? 'big' : 'small';
console.log(ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 2;

// 산술 연산자: 곱셈
let multiplication = 30 * 2;

// 산술 연산자: 나눗셈
let division = 14 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;
console.log(remainder);

if(a%2==0){
  console.log('짝수');
}

// 산술 연산자: 거듭 제곱
let power = Math.pow(2,53);


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
console.log(typeof onlyWorkDefaultValues);

let firstArray=[1,2,3];
let secondArray=[4,5,6];

const newArray = firstArray.concat(secondArray); //concat() 배열을 합쳐준다 - 올드함 옛날거
console.log(newArray);

//스프레드 오퍼레이터
//스프레드 신탁스
//배열이 촥 펼쳐지는거
//spread syntax 배열뿐만아니라 객체도 나열가능하다(풀어서 나열함)
console.log(...firstArray , ...secondArray);
console.log([...firstArray , ...secondArray]);



// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --
let counter =0;
counter++;
++counter;


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?
// let total = (10 % 4) * (10/2) + counter ** 3; // ?
// let total = (2) * (5) + 5 ** 3; // ?
// let total = (2) * (5) + 125; // ?
// let total = 10 + 125; // ?
console.log(total);

// let total = count %4;
// count = count / 2;
// let pow = count **3;
// total = total + count + pow;


