/* Type Conversion       */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(String(YEAR)); //명시적 형변환
console.log(YEAR + ''); //암시적 형변환

// undefined, null
let days = null;
console.log(typeof String(days));
console.log(String(days));
console.log(days + "");

let undef = undefined;
console.log(String(undefined));
console.log(undefined + '');

// boolean

let isClickde = true;
console.log(String(isClickde));
console.log(isClickde + '');


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(friend);
console.log(Number(friend)); //NaN

// null
let bankbook = null;
console.log(Number(bankbook));
console.log(bankbook*1);

// boolean
let cutie = true;
let noCutie = false;
console.log(Number(cutie)); //true는 1
console.log(Number(noCutie)); //false는 0

// string
let num = '250';
console.log(Number(num));
console.log(+num);
console.log(num*1);
console.log(num/1);

// numeric string
let width = '105.3px';
console.log(width);
console.log(Number(width));//NaN

let pFloat = parseFloat(width,10); //실수
console.log(pFloat); // 105.3 실수반환(숫자만)

let pInt = parseInt(width,10); //정수 뒤에 진수값을 넣어주는것이 좋다
console.log(pInt); //105 정수반환(숫자만)




//제일 중요
/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(friend));//undefined->boolean : false
console.log(Boolean(bankbook));//null->boolean : false
console.log(Boolean(0));//0->boolean : false
console.log(Boolean(NaN));//Nan->boolean : false
console.log(Boolean(''));//''->boolean : false
console.log(Boolean(1));//1->boolean : true
console.log(Boolean('0'));//문자열 0->boolean : true

console.log('암시적 형 변환 : ' + !!false);
