// arrow expression
// java에서 배운 lambda식에서 화살표만 바꾼거나 다름없음.

// 4칸으로 된 배열에 0으로 값 채우기
let datas = new Array(4).fill(0);
// 값, 방번호 출력하기 --> 0으로 모두 채웠기 때문에 data는 모두 0이 출력
datas.forEach((data, i) => console.log(data, i));

datas.forEach(function(data, i, datas){
    console.log(data, i);
    console.log(datas);
});

// 1~4까지 출력하기
// map(): 배열의 모든 요소에 대해 주어진 함수를 호출하여 새로운 배열을 생성
datas = datas.map((data, i) => i + 1);
datas.forEach(data => console.log(data));

// 짝수만 출력하기
//  filter(): 주어진 조건을 만족하는 요소로 새로운 배열을 생성
datas = datas.filter(data => data % 2 == 0);
datas.forEach(data => console.log(data));