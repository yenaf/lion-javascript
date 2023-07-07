/* Switch           */

// const MORNING    = '아침',
//       LUNCH      = '점심',
//       DINNER     = '저녁',
//       NIGHT      = '밤',
//       LATE_NIGHT = '심야',
//       DAWN       = '새벽';

// let thisTime = MORNING;

// switch (thisTime){
//   case MORNING  :
//     console.log('뉴스 기사 글을 읽는다.');
//     break;

//   case LUNCH :
//     console.log('자주 가는 식당에 가서 식사를 한다.');
//     break;

//   case DINNER  :
//     console.log('동네 한바퀴를 조깅한다.');
//     break;
    
//   case NIGHT  :
//     console.log('친구에게 전화를 걸어 수다를 떤다.');
//     break; 

//   case LATE_NIGHT :
//   case DAWN :
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//     break;
// }

//한줄로도 작성 가능하다
// switch (thisTime){
//   case MORNING  : console.log('뉴스 기사 글을 읽는다.'); break;
//   case LUNCH : console.log('자주 가는 식당에 가서 식사를 한다.'); break;
//   case DINNER  : console.log('동네 한바퀴를 조깅한다.'); break;
//   case NIGHT  : console.log('친구에게 전화를 걸어 수다를 떤다.'); break; 
//   case LATE_NIGHT :
//   case DAWN : console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'); break;
// }


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */
// if(thisTime === '아침'){
//   console.log('뉴스 기사 글을 읽는다.');
// }else if(thisTime === '점심'){
//   console.log('자주 가는 식당에 가서 식사를 한다.');
// }else if(thisTime === '저녁'){
//   console.log('동네 한바퀴를 조깅한다.');
// }else if(thisTime === '밤'){
//   console.log('친구에게 전화를 걸어 수다를 떤다.');
// }else if(thisTime === '심야' || thisTime === '새벽'){
//   console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
// }


/* switch vs. if -------------------------------------------------------- */
/* 
0 = '일'
1 = '월'
2 = '화'
3 = '수'
4 = '목'
5 = '금'
6 = '토'

1. 랜덤한 수 생성
2. 조건비교
3. 해당 결괏값을 출력
4. 함수만들기 ->쪼갬
 */

//const day = Math.floor(Math.random()*7); //0 ~ 6까지 랜덤한 수


function getRandom(max){
  return Math.floor(Math.random() * max);
}

const day = getRandom(7);

function getDay(dayValue){
  switch (dayValue) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}
// 함수안에서 break가 필요없는 이유? 함수는 리턴을 만나는 순간 함수를 종료시킨다
// console.log(getDay(getRandom(7)));
console.log(getDay(day));

//요일을 출력하는 함수
//요일을 가지고 주말인지 아닌지 함수만들기
function isWeekend(dayValue){
  const today = getDay(getRandom(dayValue));

  return today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일'

  // return today === '토' || today === '일';

  // if(today === '토' || today === '일'){
  //   return true;
  // }else{
  //   return false;
  // }

}

console.log(isWeekend(7));



console.log('일월화수목금토'[Math.floor(Math.random() * 7)]);