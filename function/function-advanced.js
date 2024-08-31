// JS에서는 함수를 값으로 봐야한다.
// 함수를 값으로 취급하기 때문에 변수에 담을 수 있다.

// getTotal을 add라는 이름으로 사용하자는 의미
let add = getTotal;

function getTotal(num1, num2){return num1 + num2};

console.log(add(1, 3));