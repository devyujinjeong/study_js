// 프로퍼티 : 키와 값(KEY와 VALUE)을 쌍을 의미한다.
// 여기에서 보면 프로퍼티가 4개 있다고 보면 됨.
// owner,age,password,address가 있고, address안에는 2개의 프로퍼티가 존재함
let account = {owner: '정유진', age: 20, password: '1234', address: {address1: '서울시', address2: '동대문구'}};
console.log(account);
console.log(account.address.address2); // 정확히 값을 한 개 가져올 때 (동대문구 출력)
console.log(account["address"]);

// in: 객체의 키를 반복할 때 사용
// of: 순서가 있는 객체의 값을 가져올 때 사용

for(let i in account.address){
    console.log(account.address[i]);
}

// List(Array)처럼 순서가 있는 객체의 값을 가져올 때 사용 (of)
for (let i of [10, 20, 30, 40]){
    console.log(i);
}

// 객체는 순서가 있는 반복자가 아니기 때문에 of 사용 불가능 
// 인덱스라는 값에 접근해서 값을 가져올 수 없음
// for (let i of account.address){ // 오류 발생
//     console.log(i);
// }

// // List(Array)를 in으로 사용하면, i에는 인덱스가 담긴다.
// // 즉, list는 인덱스가 key인 것이다.
for (let i in [10, 20, 30, 40]){
    console.log(i);
}

account.money = 10000;

// account라는 영역 안에서 선언됨. 이때는 메소드라고 불러야 함.
// 일회성으로 사용하고 싶은 경우에는 밑에 처럼 코드 작성
// account.deposit = function(money){this.money += money;};

// 다회성으로 사용하고 싶은 경우에는 함수를 빼서 선언하기
account.deposit = deposit;
function deposit(money){
    this.money += money;
}

account.deposit(40000);
console.log(account.money);