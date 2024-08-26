// var x = 10; // 전역변수
globalThis.x = 10; // 전역 변수와 지역 변수의 식별자가 동일할 경우 사용

f();

function f(){
    var x = 100; //지역 변수 
    var y = 20; //지역 변수
    z = 30; // 전역 변수
    console.log(globalThis.x); // 여기에서됨는 전역변수인 10이 출력되는 것이고
    console.log(x); // 여기에서는 지역변수인 100이 출력됨
}

// console.log(y); //오류 발생
console.log(z);
  
// 앞으로는 var 대신에 let을 쓰자!!
// var로 선언 시, scope는 반드시 함수의 영역만 판단한다.
// 그래서 밑에서 var을 썼을 때, for은 함수가 아니기 때문에 for문 밖에서도 사용이 가능함.
// 우리가 java때 배운 변수는 let으로 생각하면 됨.

// 여기에서는 오류가 발생하지 않음.
// for(var i=0;i<10;i++){
// }
  // console.log(i);

// 이렇게 했을때는 오류가 발생
for(let i=0;i<10;i++){
}
console.log(i);


