/* Condition        */

//1.항상 실행되는 조건부 만들기
// if('0'){
//   console.log('이 조건은 항상 실행 됩니다.');
// }



//2.
// let jsName = prompt( "자바스크립트의 ‘공식’ 이름은 무엇일까요?").toLowerCase().trim();

// if(jsName === 'ecmascript'){
//   alert('정답입니다!');
// }else{
//   alert( '모르셨나요? 정답은 ECMAScript입니다!');
// }



//3.
// let num = +prompt('숫자를 입력해주세요',0);

// if(num>0){
//   alert('1');
// }else if(num <0){
//   alert('-1');
// }else{
//   alert('0');
// }


//4.
// let result = (a + b < 4) ? '미만' : '이상';




//5.
// let message = (login == '직원') ? '안녕하세요' :
// (login == '임원') ? '환영합니다.':
// (login == '') ? '로그인이 필요합니다.' :
// '';





// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No



// 영화 볼거니?
// let goingToWatchMovie = confirm('영화볼거니?');

// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?','');
// 영화 볼거니?


if(!didWatchMovie){
  
  // 영화 볼거니?
  let goingToWatchMovie = confirm('영화 볼거니?');  
  
  if(goingToWatchMovie){
    let withWho = prompt('누구랑 볼거니?','');

    if(withWho === '여자친구'){
      console.log('zzz');
    }else if(withWho === '가족'){
      console.log('화목하네');
    }else{
      console.log('재밌게보구와~~~~');
    }
  }

}else{
  let alone = confirm('너 혼자 봤니?');
  
  if(alone){
    let didCry = confirm('너 울었니..?');

    if(didCry){
      console.log('너..찌질했네..');

    }else{
      console.log('너 T야?');
    }
  }
}




// if 문(statement)
// if(didWatchMovie === 'yes'){
//   console.log('무슨영화봤어?');
// }else if(goingToWatchMovie === 'no'){
//   console.log('나랑 영화보러갈래?');
// }else{
//   console.log('그래..');
// }

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식








// function render(node,isActive){

//   let template = `
//     <div>${isActive ? <b></b> : null }</div>
//   ` 

//   node.insertAdjecentHTML('beforeend',template);

// }

// render(body)



// 조건 부 랜더링 

// function Button({color,name,isActive}){
  
//   return(
//     <div style={ {color} }>
//       {isActive ? <b></b> : null}
//     </div>
//   )
  
// }


