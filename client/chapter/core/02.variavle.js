
//1번문제 
// admin과 name이라는 변수를 선언하세요.
// name에 값으로 "John"을 할당해 보세요.
// name의 값을 admin에 복사해 보세요.
// admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다.
let admin, name;
name = 'John';
admin = name;
name = 'beom' // name에 재할당하여 값을 바꿔도 admin은 그대로 John이다 
// console.log(admin);




//2번문제
// 현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
// 웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
let ourPlanetName = 'earth';
let currentUserName = 'yena';



/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - Calculate product price by quantity
let CalcProductPriceQuantity;

// - 구매 제품 가격의 총 합
// - Total sum of purchase product price
let totalProductPrice;

// - 1년 기준 일(day)자 수
// - days per year
const DAY_PER_YEAR = 365;

// - 구매 결제 여부(했어 안했어 /  있어 없어) 여부를 물을때는 is 또는 has를 통상적으로 많이 붙인다
// - whether to pay for the purchase
let isPayment = flase;
let hasClassName = ture;


// - 구매 결제 내역
// - 구매 결제 내역
let paymentHistory;

// - 브랜드 접두사
// - brand prefix
const BRAND_PREFIX = 'NIKE';

// - 오늘의 운세
let fortuneOfToday = '';

// - 상품 정보
// - product information
const productInformation = '';


// panding 아무것도 안함
// loading 로딩중 요청대기
// fulfilled, resolved 응답성공
// rejected 실패 

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';
