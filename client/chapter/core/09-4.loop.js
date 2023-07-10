/*      For In Loop      */


const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};


const key = 'nickName';
// console.log(key in javaScript);
//in문 : 객체안에 내가 원하는 값(property)이 있어? 반환값은 true 또는 false
//in문을 쓰면 조상... 원래가지고있는 객체의 기본값들도 true로 반환한다.
// console.log(javaScript.hasOwnProperty(key));


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
Object.prototype.nickName = 'tiger';

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

Object.prototype.hasOwnProperty.call(javaScript,key);
// console.log(Object.prototype.hasOwnProperty.call(javaScript,key));
//찐 객체에접근해서 hasOwnProperty 이라는 능력을 가져와서 내 자바스크립트객체의 key랑 비교해줘



// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

// for(let key in javaScript){
  //   if(Object.prototype.hasOwnProperty.call(javaScript,key)){
    //     console.log(key);
    //   }
    // }
    
    
    //Object.prototype = ({})
    for(let key in javaScript){
      if(({}).hasOwnProperty.call(javaScript,key)){
        console.log(key);
      }
    }

    

// - 배열 객체 순환에 사용할 경우?
const tens = [10,100,1000,10000];

for(let key in tens){
  console.log(key);
  console.log(tens[key]);
}

//for~in 은 객체를 순환하는 용도로 사용이 가능하다
//배열은...좀 그렇다.배열은 forEach, for~of

