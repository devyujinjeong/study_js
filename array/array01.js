// 프로토타입으로 만들기
const datas1 = new Array();
// console.log(datas);

// 1. 값 추가하기
// 해당되는 인덱스에 값을 추가함.
// 그렇다면 밑의 코드를 생각했을 때, 1번~4번 인덱스안에 있는 값들은 어떻게 되는거지?
// 그냥 알아서 빈공간으로 처리해줌 <4 empty items>이렇게 나옴
datas1[0] = 2; 
datas1[5] = 10;
datas1.push(1); // 뒤에 값을 추가해줌

console.log(datas1);
console.log(datas1.length);

// 2. join(): 원하는 구분점으로 요소들을 연결한 문자열로 리턴
const datas2 = [1, 2, 3, 4];
console.log(datas2.join(':'));

// 3. slice(begin, end): 원하는 부분을 추출, end는 exclusive
const datas3 = [1, 3, 5, 7, 9];
// 0~2번 방까지의 값을 추출하고, join을 통해 구분
console.log(datas3.slice(0, 3)); //이렇게 했을 때는 배열로 추출됨
console.log(datas3.slice(0, 3).join(":"));

// 4. splice(begin, deleteCount)
// 해당 인덱스를 deleteCount만큼 오른쪽 방향으로 삭제
// 삭제된 요소를 Array 객체로 리턴
// 원본 객체는 즉시 반영
const datas4 = [2, 4, 6, 8, 10];
// 0번방에 담긴 값을 포함해서 오른쪽 방향으로 2개 삭제하기
// splice를 출력하면 삭제된 값이 출력되고, 이후에 datas를 출력하면 값이 삭제된 다음에 잘 출력됨.
console.log(datas4.splice(0, 2));
console.log(datas4);

// 5. indexOf(값);
const datas5 = ['A', 'B', 'C'];
// A의 방번호
let index = datas5.indexOf('A');
console.log(index);
datas5.splice(index, 1);
console.log(datas5);

// 6. split(구분점): 구분점으로 각 값을 분리한 뒤 Array 객체로 리턴
let data1 = "ABC";
const datas6 = data1.split("");
console.log(datas6);

// 7. replace(serachValue, replaceValue): 검색된 값을 대체할 값으로 변경 후 리턴
let data2 = "A,B,C";
// ,를 그냥 빈칸으로 연결하도록 하는 것임.
// replace(바꾸고 싶은 값, 원하는 값)
console.log(data2.replace(",", ":")); //이건 첫번째것만 바뀜
console.log(data2.replaceAll(",", "")); //이건 모두 바뀜
console.log(data2);