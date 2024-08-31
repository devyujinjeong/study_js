// 1. 1~10까지 Array객체에 담은 후 짝수만 출력(객체는 const에 담기)
let datas = new Array(10).fill(0); // 0으로 이루어진 배열 만들기. 10칸임
datas = datas.map((data,i) => i + 1); //기존 값 변경하기.
datas.filter(data=>data%2==0).forEach(data => console.log(data)); //조건식이 true일 경우에 값 출력하기 (짝수)

// 2. 한글을 정수로 변경
// hangle의 index 번호를 이용하기
// const hangle = "공일이삼사오육칠팔구";
// const input = "일공공사";

// let result = parseInt(input.split("").map(data=>hangle.indexOf(data)).join(""));
// console.log(result);

// 3. 정수를 한글로 변경
const hangle = "공일이삼사오육칠팔구";
const input = "1204".split("");


let result = input.map(data=>hangle.charAt(data)).join("");
console.log(result);