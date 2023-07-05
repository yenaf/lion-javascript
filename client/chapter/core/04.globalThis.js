// 브라우저 환경에서 모두 윈도우를 뜻한다
// console.log(this);
// console.log(self);


//브라우저 환경에선 전역 객체를 window, Node.js 환경에선 global라고 부르는데, 각 호스트 환경마다 부르는 이름은 다릅니다.
// console.log(window);
// console.log(global);

//전역 객체는 globalThis라는 보편적인 이름으로 불립니다.
// console.log(globalThis);


/* ------------------ */
/* Global This        */
/* ------------------ */

var objectVariable = '전역 객체의 변수';
let declarativeVariable = '전역 변수';

// globalThis를 통해 접근 가능한 변수와 그렇지 않은 변수는?
console.log(globalThis);
console.log(globalThis.objectVariable);
console.log(globalThis.declarativeVariable);

// 전역 객체는 이전 버전과의 호환성으로 인해 JavaScript가 제거할 수 없는 실수로 간주됩니다. 
// 성능에 부정적인 영향을 미치며 일반적으로 혼란스럽습니다. 전역 객체를 사용한 변수 사용은
// 문제를 발생시킬 소지가 있고, 테스트가 어려우니 가급적 사용하지 않는 것이 좋습니다.




//상호님 질문
// object environment의 object가 window, 즉 전역객체고
// var는 그 전역객체에 저장된다면,
// 결국 let, const는 총체적으로 어디에 저장되나요?
// declartive environment가 객체고 거기에 저장되나요?

// 답변 : no, 는 declarative environment는 객체가 아니라 환경임, 
// browser의 메모리에 저장이 됨

// 선언보다 윗 라인넘버에서 읽으려고 하면 
// var는 undifined가 되고

// let은 찾지 못했다고 오류가남

// let/const는 메모리에 저장이 될 뿐, 다르게 저장되지 않기 때문
// let/const 영역을 TDZ, temperal dead zone이라 부른다
// 임시사망지역