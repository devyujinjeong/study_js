// 동기와 비동기 방식

// java에서 import처럼 생각하면 됨.
// import 대신 require를 쓰는 것임.
let file = require(`fs`); 

// file.writeFile('경로', '내용', '인코딩', '콜백함수');
// file.writeFile('love.txt','난 널 사랑해', function(error){});

// file.readFile('경로', '인코딩', '콜백함수');
// 내용을 읽어오기 때문에, 내용은 필요없음.
// 순서가 위에서 아래로 제대로 진행됐다면, 출력이 돼야 하는데, 안됐음
// 지금 file.readFile부분이 비동기로 진행되고 있음

// globalThis.content;

// file.readFile('love.txt','utf-8', function(error,content){
//     globalThis.content= content;
// });

// console.log(globalThis.content);

// file.readFile('love.txt','utf-8', function(error,content){
//     console.log(content);
// });

// 이건 동기
let content = file.readFileSync('love.txt','utf-8'); 
console.log(content);