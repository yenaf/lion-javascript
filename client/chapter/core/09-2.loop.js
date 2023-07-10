/* -------------------- */
/* Do While Loop        */
/* -------------------- */


//값이 참이건 거짓이것 무조건 1번은 꼭 실행시켜준다.

// let i=0;
// do{
//   if(i===0){
//     console.log('최초실행');
//   }else{
//     console.log(`${i}번째 실행`);
//   }

//   i++;

// }while(i<10);



// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = +prompt('순환 횟수를 입력해주세요',0);

// do{//반복하는코드
//   console.log(repeat);

//   if(repeat<0){
//     console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
//     break;
//   }

//   repeat--;

// }while(repeat);//조건



// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector('.first');
// let second = document.querySelector('.second');

// console.log(first);

//first.nextSibling.nextSibling.nextSibling.nextSibling
//            text / comment / text / span
//first.nextSibling.nodeType 
//.nextSibling : 다음요소를 찾는다.


//노드의 타입을 비교할때 숫자로 비교하는 경우가 많다.
//Node.ELEMENT_NODE (1) 요소
//Node.ATTRIBUTE_NODE (2) 속성
//Node.TEXT_NODE (3) 


// do{
//   first = first.nextSibling;
// }while(first.nodeType !== document.ELEMENT_NODE);
// console.log(first);


function next(node){
  do {
    node = node.nextSibling;
  }
  while (node.nodeType !== 1);

  return node;
}

const second = next(first);

console.log(second);



//이전요소를 선택 .previousSibling
//선택한 요소의 이전요소를 선택하는 함수 만들기

function prev(node){
  do {
    node = node.priviousSibling;
  } 
  while (node.nodeType !== 1);

  return node;
}


