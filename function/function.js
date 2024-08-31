let result = add(1,2,3);
console.log(result);

// 전달된 정수의 총 합 구하기 (정수의 개수는 알 수 없다).
function add(...numbers){
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        total+=numbers[i];
    }
    return total;
}

// JS는 오버로딩이 없다.
// 만약 같은 식별자로 함수를 선언하면, 가장 마지막에 선언한 함수가 실행된다.
// function add(num1, num2){
//     return num1 + num2;
// }
// function add(num1, num2, num3){
//     return num1 + num2 + num3;
// }


intro("정유진", 24, "서울시 동대문구", "여자");

// 가변인자: 여러 개의 값을 받아야 할 때 사용한다.
// name과 나머지 데이터가 따로 분리되어서 나옴
function intro(name, ...datas){
    console.log(name, datas);
    for(let i=0; i<datas.length; i++){
        console.log(datas[i]);
    }
}