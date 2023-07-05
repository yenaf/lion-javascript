# 멋쟁이 사자처럼
---
## 자바스크립트 학습 저장소

---

### basic 목차
학습이 완료된 항목은 체크박스로 표시됩니다.

- [x] CodeStructure [바로가기](https://ko.javascript.info/structure)
- [x] Variable [바로가기](https://ko.javascript.info/variables)
- [x] Strict Mode [바로가기](https://ko.javascript.info/strict-mode)
- [x] Global This [바로가기](https://ko.javascript.info/global-object)
- [x] Data Types [바로가기](https://ko.javascript.info/global-object)

---

#### CodeStructure [바로가기](https://ko.javascript.info/structure)
- 문(statement)은 어떤 작업을 수행하는 문법 구조(syntax structure)와 명령어(command)를 의미합니다.
- 세미콜론
- 주석

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
console.log(x);//undefined
```

- let, const 는 블록 스코프가 있습니다.
```js
if (true) {
  let test = true; // 'let'으로 변수를 선언함
}

alert(test); // Error: test is not defined
```
---

#### Data Types [바로가기](https://ko.javascript.info/global-object)
- 자바스크립트는 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 ‘동적 타입(dynamically typed)’ 언어이다.
- 동적타입언어의 특징을 보안한것이 타입스크립트이다.
##### 8가지 자료형
  1. 숫자형 Number
  2. BigInt  : 길이 제약 없이 정수를 나타낼 수 있습니다.
  암호관련작업또는 금융권에서 많이 쓰임. 자료구조 알고리즘 테스트에도 사용
      ```
      자바스크립트에서 나타낼수있는 최대수(제일 안전한 수) 2**53-1
      자바스크립트에서 나타낼수있는 최소수(제일 안전한 수) -(2**53-1)
      ```
      ```js
      //최대수보다 더 큰 숫자를 써야할때 n을 붙인다.
      // 끝에 'n'이 붙으면 BigInt형 자료입니다.
      const bigInt = 1234567890123456789012345678901234567890n;
      ```
  3. 문자형 String
      ```
      자바스크립트에선 문자열(string)을 따옴표로 묶습니다.
      - 큰따옴표: "Hello"
      - 작은따옴표: 'Hello'
      - 역 따옴표(백틱, backtick): `Hello` = 템플릿 리터럴
        - 문(if문 등)은 값을 반환하지 않기때문에 백틱안에 올수없다 식만 올수있다.
      ```
  4. 불린형 Boolean
  - 불린형(논리 타입)은 true와 false 두 가지 값밖에 없는 자료형입니다.

  5. ‘null’ 값
  - 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
  - let age = null;은 나이(age)를 알 수 없거나 그 값이 비어있음을 보여줍니다.

  6. ‘undefined’ 값
  - undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.
  - 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당됩니다.

  7. 객체
  - 복잡한 데이터 구조를 표현할 때 사용합니다.
    - Array
    - Function

  8. 심볼
  - 객체의 고유 식별자를 만들 때 사용합니다.


##### typeof 연산자
- 피연산자의 자료형을 알려줍니다.
- typeof x 또는 typeof(x) 형태로 사용합니다.
- null의 typeof 연산은 "object"인데, 이는 언어상 오류입니다. null은 객체가 아닙니다.


---

- [ ] Type Conversion [바로가기](https://ko.javascript.info/type-conversions)
> 형변환