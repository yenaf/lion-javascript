/* Object    */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// auth는 뜻이 여러가지기때문에 중의적 표현 확인하기 !
// authorization : 권한
// authentication : 인증

let authUser = {
  uid : 'user-id-zqe$123',
  name : 'tiger',
  email : 'tiger@gmail.com',
  inSingIn : true,
  permission : 'paid'//free | paid
};
// console.log(authUser);


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.name);
// console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['name']);
// console.log(authUser['email']);




//? class로 객체
// class User{
//   constructor(name,email){
//     this.name =name;
//     this.email=email
//   }
// }

// const user3 = new user('동혁');
// console.log(user3);



// 계산된 프로퍼티 (computed property)
//객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 이를 계산된 프로퍼티(computed property) 라고 부릅니다.
let computedProperty = 'phone'; // phone | tel

//자바스크립트의 함수는 값을 리턴한다.

//함수로 객체 만들기
// function createUser(
//   name,
//   email,
//   computedProp = 'phone',
//   number = '010-0000-0000',
//   ){

    // let name = ''; //매개변수는 이렇게 된다는 뜻
//   return {
//     name : name,
//     email : email,
//     [computedProp] : number,
//   }
// }

// const user = createUser();
// // console.log(user);
// const user1 = createUser(
//   '진승',
//   'jin@naver.com',
//   'tel',
//   '010-1234-1234'
//   );
// console.log(user1);




// 프로퍼티 포함 여부 확인
//key in user1
//자신의(own) 속성(property)을 가지고(has) 있는지 확인하는 확인하는 방법
// for(let key in user1){
//   // Object.prototype.hasOwnProperty.call(user1,key);
//   if (Object.prototype.hasOwnProperty.call(user1,key)) {
//     // console.log(key);
//   }
// }

// Object.keys - key만 모아놓은 배열 만들어주세요
// Object.values
// Object.entries


// 프로퍼티 나열
// let keyArray = Object.keys(authUser);
// let valueArray = Object.values(authUser);


//getProp(object)
// function getProp(object){
//   if(typeof object !== 'object'){
//     throw new Error('getProp 함수의 매개변수는 객체 타입이어야 합니다.')
//   }
//   return Object.keys(object)
// }
// getProp(authUser)






// 프로퍼티 제거(=null , remove)  or  삭제(없앰,delete) 

// authUser.name = null; //제거
// delete authUser.uid //삭제

// function removeProperty(object,key){

//   if(typeof object === 'object'){
//     throw new Error('에러');
//   }



//   if(key ==='all'){
//     for(let key of getProp(object)){
//       object[key] = null;
//     }
//   }
//   return object
// }

// removeProperty(authUser,'name');
// console.log(authUser);




//삭제하는 함수
// function deleteProperty(object,key){
//   delete object[key];
//   return object;
// }
// deleteProperty(authUser,'name');













// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student={
  name,
  email,
  authorization,
  isLogin,
}

// console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성

// const b={};
// function isEmptyObject(object) {
//   return Object.keys(object).length === 0? true : false;
// }
// isEmptyObject(authUser);//false
// console.log(isEmptyObject(authUser));
// console.log(isEmptyObject(b));





//*배열의 구조분해 할당
//순서가 정해져있다. 변수 이름을 바꿀수있다.
let color = ['#ff0000', '#2b00ff', '#00ff2f'];

let [r,b,g] = color;
// console.log(green);


//*객체의 구조분해 할당
//순서가 정해져있지 않다. 변수이름을 바꿀수있다.
const salaries={
  권혜미 : 50,
  이수연 : 3000,
  강예나 : 500,
  김태일 : 700,
}
// console.log(salaries.권혜미);//50

const {권혜미:미미, 이수연, 강예나, 김태일} = salaries;
console.log(미미);






function setElementCss(options){
  console.log(options);
  const {width :w =100,height:h=10,overflow,color='red'} = options;
  console.log(w);
  console.log(h);
  console.log(color);
}



const defaults = {
  width : 100,
  height : 200,
  overflow : false,
  color : 'orange',
}

setElementCss(defaults)
setElementCss({
  width : 100,
  height : 200,
  overflow : false,
  color : 'orange',
})












