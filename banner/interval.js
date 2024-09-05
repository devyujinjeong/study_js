// setInterval(callback, millis);
// 전달한 밀리초 마다 한 번 씩 callback함수 실행

// 1초에 한번씩 '사랑해' 출력하기
const print = setInterval(() => {console.log('사랑해')}, 1000);

// 3.1초 후에 중단한다는 의미
setTimeout(() => {clearInterval(print);}, 3100);
