/*      While Loop      */

// let reppeat = 0;
// while(reppeat <10){
//   console.log(reppeat);
//   reppeat++;
// }


const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// 성능 진단 : 순환 vs. 역순환
// let z1 = performance.now();

// let i=0;
// while(i<frontEndDev.length){
  //   console.log(frontEndDev[i]);
  //   i++;
  // }
  
  // let z2 = performance.now();
  // console.log(z1);
  // console.log(z2);
  // console.log(z2-z1);

  
  
  // while 문 (역순환 : 역방향)
  // 역방향이 성능이 더 좋다.
let l = frontEndDev.length-1;
while(0 <= l){
  
  console.log(frontEndDev[l]);
  l--;
}








//배열을 바로 쓰면 원본파괴...
//그래서 통채로 복사한다 ->배열의 깊은 복사
let copyArry = frontEndDev.slice(); //옛날방식
let copyArry2 = [...frontEndDev]; //최신방식 스프레드 신탁스
console.log(copyArry2);

while(copyArry.length){
  console.log(copyArry.pop());
}




