// function add(a,b){
//     return a+b;
// }

// function getResult(value){
//     console.log(value);
// }

// getResult(add(3,4));

// 위의 함수를 callback함수를 이용해서 만들기
function add(a,b,callback){
    if(callback){
        callback(a+b);
    }
}

add(1,2,function(value){console.log(value);})
