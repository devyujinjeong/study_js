// 전역 변수와 지역 변수의 식별자가 같지 않게 설정하는 것이 가장 좋은 방법이다.
// 하지만 개발자가 지역 내에서 작업할 때 모든 전역변수의 식별자를 확인하는 것이 쉽지 않다.
// 따라서 전역변수는 되도록 globalThis 객체에 담아서 사용한다.

// let : 중복된 식별자로 선언 불가, 값 수정 가능
// const : 상수, 값 수정 불가능

// let data = 10;
globalThis.data=10;

f();

function f(){
    globalThis.data=20;
    let data = 30; //지역변수
    console.log(data); // 30 출력
}

console.log(data); // 20 출력

// js에서 const는 HTML 태그 객체를 가져올 때 사용한다.
const ON = 1; // let처럼 할당 불가 
console.log(ON);