// 이미 만들어 놓은 함수들
// eval(expression): 문자열 수식을 전달하면 자동 연산.

console.log(eval("2+9"));
let result = (function(expression){return eval(expression)})("2+9");
console.log(result);

// parseInt(),parseFloat() --> 이건 자바랑 똑같음
let integer= (function(string){return parseInt(string)})("30");
console.log(integer+1); 

// isNaN(), isFinite()
// isNaN()은 is not a number라는 의미
// isFinite()는 유한수인지 판단하는 것
console.log(isNaN("안녕"));
console.log(isNaN("0"));
console.log(isNaN("")); //숫자 0으로 변환됨.
console.log(isFinite("0"));
console.log(isFinite("10/0"));