// 동적 바인딩: 컴파일 시 값에 따라 자료형이 동적으로 결정된다.
// 그래서 처음에 data에 10을 할당했을 때는 type이 number로 나옴
// 그 다음에 data에 "안녕"을 할당하면, type이 string으로 나옴
// 즉, 이처럼 type이 동적으로 결정되는 것임.
var data=10;
console.log(data);
console.log(typeof(data));

data="안녕";
console.log(typeof(data));

// var 키워드를 사용하더라도 여러 번 선언이 가능하기 때문에 계속 수정될 수 있다.
var data=true;
console.log(typeof(data));

// hoisting (호이스팅) 
// 코드가 실행하기 전 변수선언/함수선언이
// 해당 scope의 최상단으로 끌어 올려진 것 같은 현상

// 초기화 작업은 호이스팅되지 않고 선언만 호이스팅 된다.
// var 키워드로 선언하지 않으면 호이스팅 대상에서 제외된다.
console.log(test); // var test; 가 출력되고 있어서 undefined가 출력
var test=10; //var라는 키워드를 사용하지 않으면 여기에서는 오류가 발생함    
