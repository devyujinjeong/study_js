// 원래 우리가 평균을 구할 때는 이런식으로 코드를 짜서, 평균값을 도출함.
// 그런데 이런 함수는 분리해서 사용하는 게 좋음

function average(num1, num2){;
    return (num1 + num2) / 2;
}
// 분리해서 사용하기!! 즉, 모듈화 하기!! (모듈은 부품)
// 분리해서 조합하는게 훨씬 이득임.
// callback 함수를 이용하기

// 음 그러니깐 여기에서 callback함수가 사용되는 게
// 1. 우선 getTotal에서 이름없는 function을 선언하고
// 2. getTotal에서 사용하는 건데, callback에서 1과 2를 더한 것을 total로 받고
// 3. 이게 total로 전달 된 다음에 평균을 구하는 것임
let total = getTotal(1, 2, function(total){return total / 2;})
console.log(total); // 이게 2번째로 출력됨.

// 함수를 받겠다!! 위에서 getTotal에 쓰여있는 함수를 선언
// 그래서 callback함수가 선언되어 있지 않더라도 함수는 잘 실행됨.
function getTotal(num1, num2, callback){
    // callback 함수가 존재한다면, if문을 실행
    if(callback){
        console.log(callback(num1 + num2)); //이게 1번째로 출력
    }
    return num1 + num2;
}


function fetchData(callback) {
    setTimeout(() => {
        const data = { message: "Data received!" };
        callback(data); // 데이터가 준비되면 콜백 호출
    }, 2000); // 2초 후에 실행
}

function displayData(data) {
    console.log(data.message);
}

// diplayData를 인자로 받아서 2초 후에 실행함
fetchData(displayData);
