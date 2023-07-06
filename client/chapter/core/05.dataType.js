/* Data Types               */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;
console.log(typeof empty); //object 언어상의 명백한 오류

// 2. 값이 할당되지 않은 상태
let unknown;

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const hi = new String('hello'); //문자 생성자 (Constructor) 방식으로 문자 만들기
const double = "hello"; //문자 리터럴 방식으로 문자 만들기
const single = 'hello';
const backtick = `hello ${1+2}`;
console.log(typeof backtick); //string
console.log(typeof hi); //object


// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(123);
const integer = 123;
const floatingPointNumber = 10.45;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const big = BigInt(123); //생성자 방식으로 만들때 new를 안붙여도된다(빅인트랑 심볼)
const bigInteger = 123n;
console.log(typeof big); //bigint

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
console.log(typeof bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const objt = new Object({});
const obj = {};
console.log(typeof objt);

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid');
console.log(typeof unique);


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
console.log(typeof 1+2);
console.log(typeof (1+2));

// 2) 함수 typeof()

// 언어 상, 오류
const num = null;
console.log(typeof num); //object 언어상의 명백한 오류


// Object
//메서드 - 객체안의 함수
const user = {
  name : 'tiger',
  age : 28,
  sayHi : function(){
    console.log('hello~');
  },

  alert1 : function(){ //nomal function

  },
  alert2 (){ //consise(축약) function

  },
  alert3 : ()=>{ //arrow function(화살표 함수)

  },
};

console.log(user.sayHi());


// Array
const newArray = new Array();
const arr = [10,100,1000,1,2,3];
console.log(arr[0]);

const count = 0;
`li:nth-child(${count + 1})`


// function
function 붕어빵틀(재료){
  // console.log(재료 + `맛 붕어빵`);
  return 재료 + `맛 붕어빵`;
}

const 팥붕어빵 = 붕어빵틀('팥');
const 슈크림붕어빵 = 붕어빵틀('슈크림');
console.log(팥붕어빵);
console.log(슈크림붕어빵);



