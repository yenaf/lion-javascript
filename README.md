# 멋쟁이 사자처럼
---
## 자바스크립트 학습 저장소

---

### basic 목차
학습이 완료된 항목은 체크박스로 표시됩니다.

- [x] CodeStructure [바로가기](https://ko.javascript.info/structure)
- [x] Variable 변수 [바로가기](https://ko.javascript.info/variables)
- [x] Strict Mode 엄격모드 [바로가기](https://ko.javascript.info/strict-mode)
- [x] Global This 전역객체 [바로가기](https://ko.javascript.info/global-object)
- [x] Data Types 자료형 [바로가기](https://ko.javascript.info/global-object)
- [x] Type Conversion 형변환 [바로가기](https://ko.javascript.info/type-conversions)
- [x] Operations 기본연산자 [바로가기](https://ko.javascript.info/operators)
- [x] Operations 비교연산자 [바로가기](https://ko.javascript.info/comparison)
- [ ] Condition 조건문 [바로가기](https://ko.javascript.info/ifelse)
- [ ] Operations 논리연산자 [바로가기](https://ko.javascript.info/logical-operators)
- [ ] Condition switch [바로가기](https://ko.javascript.info/switch)
- [ ] Operations 병합연산자 [바로가기](https://ko.javascript.info/nullish-coalescing-operator)
- [ ] Loop [바로가기](https://ko.javascript.info/while-for)

---

#### CodeStructure [바로가기](https://ko.javascript.info/structure)
- 문(statement)은 어떤 작업을 수행하는 문법 구조(syntax structure)와 명령어(command)를 의미합니다.
- 세미콜론은 생략할 수 있지만 세미콜론을 사용하는 것이 더 안전.
- 주석 한 줄짜리 주석은 두 개의 슬래시 //로 시작됩니다. 여러 줄의 주석은 슬래시와 별표 /*로 시작해 별표와 슬래시 */로 끝납니다.

---

#### Variable [바로가기](https://ko.javascript.info/variables)
> 변수(variable) : let / var / const

- let 재할당할수있다, 값을 복사할수있다, 변수는 한번만 선언해야한다
- var
- const 상수 : 변하지않는 변수 / 대문자상수 = 찐상수


> 변수명 규칙 
  - 규칙변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있습니다.
  - 첫 글자는 숫자가 될 수 없습니다.
  - 대·소문자 구별
  - 변수명은 숫자로 시작해선 안 됩니다. // 예시 - let 1a;
  - 하이픈 '-'은 변수명에 올 수 없습니다. // 예시 - let my-name;
  - [예약어(reserved name) 목록](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)에 있는 단어는 변수명으로 사용할 수 없습니다. 


>카멜표기법
- 카멜 표기법은 단어를 차례대로 나열하면서 첫 단어를 제외한 각 단어의 첫 글자를 대문자로 작성합니다. // 예시 - myVeryLongName

---

#### Strict Mode [바로가기](https://ko.javascript.info/strict-mode)
- 엄격모드 : 지시자 "use strict", 혹은 'use strict' 가 스크립트 최상단에 오면 스크립트 전체가 “모던한” 방식으로 동작합니다.
- "use strict"는 스크립트 최상단에 있어야 한다는 점을 잊지 마세요. 그렇지 않으면 엄격 모드가 활성화되지 않을 수도 있습니다.
- 코드를 클래스와 모듈을 사용해 구성한다면 "use strict"를 생략해도 됩니다.

---


#### Global This [바로가기](https://ko.javascript.info/global-object)
- 전역객체 : 브라우저 환경에선 전역 객체를 window, Node.js 환경에선 global라고 부르는데, 각 호스트 환경마다 부르는 이름은 다릅니다. globalThis로 표준화하자는 내용이 최근에 자바스크립트 명세에 추가되었다. Chromium 기반이 아닌 몇몇 브라우저는 아직 globalThis를 지원하진 않지만, 이에 대한 [폴리필(polyfill)](https://happysisyphe.tistory.com/49)을 쉽게 만들 수 있습니다.
- 전역객체를 오염시키면 안된다. 기존의 기능을 지켜야한다. (그래서 var를 사용하지 않는다.)
- 전역 객체엔 Array와 같은 내장 객체, window.innerHeight(뷰포트의 높이를 반환함)같은 브라우저 환경 전용 변수 등이 저장되어 있습니다.
![글로벌,윈도우 환경](https://github.com/yenaf/lion-javascript/assets/115360074/ff376650-eb77-4206-82d9-dea4746fe6a2)


##### 오래된 var [바로가기](https://ko.javascript.info/var)
- var는 블록 스코프(변수의 사용 범위)가 없습니다.
- var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다. 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.
- var는 블록에는 영향을 받지만 함수에는 영향을 받는다. var는 함수안에서는 스코프(범위)가 형성된다.
- 변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고 부릅니다. var로 선언한 모든 변수는 함수의 최상위로 ‘끌어 올려지기(hoisted)’ 때문입니다
- var는 선언은 호이스팅 되지만 할당은 호이스팅 되지 않습니다.
```js
if (true) {
  var test = true; // 'let' 대신 'var'를 사용했습니다.
}
alert(test); // true(if 문이 끝났어도 변수에 여전히 접근할 수 있음)

function test(){
  var x = 10;
}
console.log(x);//undefined 함수안에서는 스코프가 형성되어 undefinde값이 나온다.
```

- let, const 는 블록 스코프가 있습니다.
```js
if (true) {
  let test = true; // 'let'으로 변수를 선언함
}
alert(test); // Error: test is not defined
```

##### 즉시실행함수 IIFE
var 도 블록 스코프를 가질수 있게 하려고 고안한 방법. 함수 표현식이 만들어지고 바로 호출되면서 해당함수가 바로 실행된다.
```js
//IIFE 만드는방법
(function() {
  alert("함수를 괄호로 둘러싸기");
})();

(function() {
  alert("전체를 괄호로 둘러싸기");
}());

!function() {
  alert("표현식 앞에 비트 NOT 연산자 붙이기");
}();

+function() {
  alert("표현식 앞에 단항 덧셈 연산자 붙이기");
}();
```

---

#### Data Types [바로가기](https://ko.javascript.info/global-object)
- 자바스크립트는 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 ‘동적 타입(dynamically typed)’ 언어이다.
- 동적타입언어의 특징을 보안한것이 타입스크립트이다.
##### 8가지 자료형

  1. 숫자형 Number

  ```js
    const number = new Number(123);
    const integer = 123;
    const floatingPointNumber = 10.45;
  ```

  2. BigInt  : 길이 제약 없이 정수를 나타낼 수 있습니다. 암호관련작업또는 금융권에서 많이 쓰임. 자료구조 알고리즘 테스트에도 사용
  ```
    자바스크립트에서 나타낼수있는 최대수(제일 안전한 수) 2**53-1
    자바스크립트에서 나타낼수있는 최소수(제일 안전한 수) -(2**53-1)
  ```

  ```js
    //최대수보다 더 큰 숫자를 써야할때 n을 붙인다.
    // 끝에 'n'이 붙으면 BigInt형 자료입니다.
    const bigInt = 1234567890123456789012345678901234567890n;
    const big = BigInt(123); //생성자 방식으로 만들때 new를 안붙여도된다(빅인트랑 심볼)
    const bigInteger = 123n;
    console.log(typeof big); //bigint 
  ```

  3. 문자형 String
  - 자바스크립트에선 문자열(string)을 따옴표로 묶습니다.
    - 큰따옴표: "Hello"
    - 작은따옴표: 'Hello'
    - 역 따옴표(백틱, backtick): `Hello` = 템플릿 리터럴
      - 문(if문 등)은 값을 반환하지 않기때문에 백틱안에 올수없다 식만 올수있다.

  ```js
    const hi = new String('hello'); //문자 생성자 (Constructor) 방식으로 문자 만들기
    const double = "hello"; //문자 리터럴 방식으로 문자 만들기
    const single = 'hello';
    const backtick = `hello ${1+2}`;
    console.log(typeof backtick); //string
    console.log(typeof hi); //
  ```

  4. 불린형 Boolean
  - 불린형(논리 타입)은 true와 false 두 가지 값밖에 없는 자료형입니다.

  5. ‘null’ 값
  - 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
  - let age = null;은 나이(age)를 알 수 없거나 그 값이 비어있음을 보여줍니다.
    
  ```js
    const empty = null;
    console.log(typeof empty); //object 언어상의 명백한 오류
  ```

  6. ‘undefined’ 값
  - undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.
  - 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당됩니다.

  7. 객체
  - 복잡한 데이터 구조를 표현할 때 사용합니다.
    - Array
    - Function

  ```js
    const objt = new Object({});
    const obj = {};
    console.log(typeof objt);
  ```

  ![붕어빵틀](https://github.com/yenaf/lion-javascript/assets/115360074/90a663fb-1199-4495-9b5b-d5585abb3444)

  ```js
  function 붕어빵틀(재료){
  // console.log(재료 + `맛 붕어빵`);
  return 재료 + `맛 붕어빵`;
  }

  const 팥붕어빵 = 붕어빵틀('팥');
  const 슈크림붕어빵 = 붕어빵틀('슈크림');
  console.log(팥붕어빵);
  console.log(슈크림붕어빵);
  ```

  8. 심볼
  - 객체의 고유 식별자를 만들 때 사용합니다.
  ```js
    const unique = Symbol('uid');
    console.log(typeof unique);
  ```


##### typeof 연산자
- 피연산자의 자료형을 알려줍니다.
- typeof x 또는 typeof(x) 형태로 사용합니다.
- null의 typeof 연산은 "object"인데, 이는 언어상 오류입니다. null은 객체가 아닙니다.


---

#### Type Conversion [바로가기](https://ko.javascript.info/type-conversions)
> 형변환
  - 명시적 형변환 : 전달받은 값을 의도를 갖고 원하는 타입으로 변환(명시적 변환)해 주는 경우
  - 암시적 형변환 : 의도하지 않게 형변환이 일어난 경우 예시  ` let value = 123 + ''; `

---

##### 문자형으로 형변환
- 명시적 형변환 `String(value)`
- 암시적 형번환 ` value + '' ` 

---

##### 숫자형으로 변환
- 명시적 형변환 Number(value)
- 암시적 형변환
```js
alert( "6" / "2" ); // 3
let str = '123';
Number(str); //명시적 형변환
+str
str*1
str/1
Number('    123    ') //123
Number(undefined) //NaN
Number(null) //0
Number(true) //1
Number(false) //0
Number('') //0 공백제거후 남아있는문자가 없다면 0, 그렇지않으면 NaN
```
- 폼(form)을 통해 입력받는경우(input, prompt), 입력값은 모두 문자로 전달되는데 이런경우 명시적 또는 암시적 변환이 필요하다.
- 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN이 됩니다. 
- null과 undefined는 숫자형으로 변환 시 결과가 다르다는 점에 유의하시기 바랍니다. null은 0이 되고 undefined는 NaN이 됩니다.

---

##### 불린형으로 형변환(제일 많이 쓰는 형변환. 중요함!)
이 형 변환은 논리 연산을 수행할 때 발생합니다.
- 명시적 형변환 Boolean(value)
- 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 됩니다. 그 외의 값(문자열 '0', 공백)은 true로 변환됩니다.
- 암시적 형변환
```js
!! //느낌표 두개 암시적 형변환 
```

---

#### Operations 기본연산자 [바로가기](https://ko.javascript.info/operators)
> 덧셈 연산자 +, 뺄셈 연산자 -, 곱셈 연산자 *, 나눗셈 연산자 /, 나머지 연산자 %, 거듭제곱 연산자 **
- 나머지 연산자를 사용한 표현식 a % b는 a를 b로 나눈 후 그 나머지(remainder)를 정수로 반환해줍니다.
- 거듭제곱 연산자(exponentiation operator)를 사용한 a ** b를 평가하면 a를 b번 곱한 값이 반환됩니다.

```js
alert( '1' + 2 ); // "12" 덧셈연산자에서는 문자열이 다 이김(문자와 덧셈되면 문자형으로 변환)
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // '221'이 아니라 '41'이 출력됩니다.
alert( 6 - '2' ); // 4, '2'를 숫자로 바꾼 후 연산이 진행됩니다.
alert( '6' / '2' ); // 3, 두 피연산자가 숫자로 바뀐 후 연산이 진행됩니다.
alert( '2' + '3' ); // 23, 이항 덧셈 연산자는 문자열을 연결합니다.
```

- 연산자 우선순위
> 괄호 > 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

- 할당 연산자 `=` 값을 반환한다.
- 복합 할당 연산자
```js
let n = 2;
n = n + 5;
n = n * 2;
-----------
let n = 2;
n += 5; // n은 7이 됩니다(n = n + 5와 동일).
n *= 2; // n은 14가 됩니다(n = n * 2와 동일).

alert( n ); // 14
```
- 증가`++`·감소`--` 연산자
  - 증가·감소 연산자는 변수에만 쓸 수 있습니다. 5++와 같이 값에 사용하려고 하면 에러가 발생합니다.
  - counter++와 같이 피연산자 뒤에 올 때는, '후위형(postfix form)'이라고 부릅니다. 값을 증가시키지만, 증가 전의 기존값을 사용하려면 후위형 증가 연산자를 사용하면 됩니다.
  - ++counter와 같이 피연산자 앞에 올 때는, '전위형(prefix form)'이라고 부릅니다. 값을 증가시키고 난 후, 증가한 값을 바로 사용하려면 전위형 증가 연산자를 사용하면 됩니다.

```js
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7) \t : 수평탭, \n : 줄바꿈 ==> 공백(0)-2=-2
```
---

#### Operations 비교연산자 [바로가기](https://ko.javascript.info/comparison)
> > , < , >= , <= , == , !=
- 다른 연산자와 마찬가지로 비교 연산자 역시 값을 반환합니다. 반환 값은 불린형입니다.
- 문자열은 문자 단위로 비교되는데, 이때 비교 기준은 ‘유니코드’ 순입니다. '사전편집(lexicographical)'순이라고 불리기도 하는데 이 기준을 적용하면 사전 뒤쪽의 문자열은 사전 앞쪽의 문자열보다 크다고 판단됩니다.
- 대문자 'A'와 소문자 'a'를 비교했을 때 소문자 'a'가 더 큽니다. 
- 동등 연산자(equality operator) ==은 0과 false를 구별하지 못합니다.
- 일치 연산자(strict equality operator) ===를 사용하면 자료형의 동등 여부까지 검사하기 때문에 형 변환 없이 값을 비교할 수 있습니다.
- 산술 연산자나 기타 비교 연산자 <, >, <=, >=를 사용하여 null과 undefined를 비교
- null과 undefined는 숫자형으로 변환됩니다. null은 0, undefined는 NaN으로 변합니다.
- undefined와 null을 비교하는 경우에만 true를 반환하고, 그 이외의 경우(null이나 undefined를 다른 값과 비교할 때)는 무조건 false를 반환합니다.

```js
alert( '2' > 1 ); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됩니다.
alert( '01' == 1 ); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됩니다.
alert( true == 1 ); // true
alert( false == 0 ); // true

alert( null === undefined ); // false
alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
```
---

#### Condition 조건문 [바로가기](https://ko.javascript.info/ifelse)
- if~else , if~else if
- 조건부 연산자 ‘?’
조건부 연산자는 물음표?로 표시합니다. 피연산자가 세 개이기 때문에 조건부 연산자를 '삼항(ternary) 연산자’라고도 합니다.
- 조건이 많이지면 if문을 쓰는것이 더 가독성이 좋다. switch~case > if > 삼항연산자

문 vs 식
문{}은 값을 내뱉지않는다
식은 값을 퉤하고 내뱉는다 

---

#### Operations 논리연산자 [바로가기](https://ko.javascript.info/logical-operators)

alert 메서드는 값을 반환하지 않습니다. 즉, undefined를 반환하죠.
alert 는 "실행하고 나면" undefined 를 반환

첫 번째 truthy를 찾는 OR 연산자 ‘||’
피연산자를 불린형으로 변환합니다. 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.

빈 배열, 빈 객체 , 빈 함수 --> 불린형으로 변환했을때 true

---

#### Condition switch [바로가기](https://ko.javascript.info/switch)

조건이 많아졌을때 switch~case문이 연산속도가 훨씬 빠르다


T || : 먼저나오는 truthy를 찾는다, 아니면 끝을 반환
F && : 먼저나오는 falsy를 찾는다, 아니면 끝을 반환
확 ?? : 먼저나오는 확정값을 찾는다, 아니면 끝을 반환



---

#### Operations 병합연산자 [바로가기](https://ko.javascript.info/nullish-coalescing-operator)

---


#### Loop [바로가기](https://ko.javascript.info/while-for)
while반복문
nodeType속성 [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)



