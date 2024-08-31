// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback 함수로 전달받는다.

getTotalPrice("감자", 200, 10, function(name, total){
    console.log(name + " 총 가격 : " + total)
});

// 이름, 가격, 재고랑 callback 함수를 전달받기
function getTotalPrice(name, price, stock, callback){
    if(callback){ // 만약에 callback함수가 선언되어 있다면
        callback(name, price * stock); //우선 name과 price*stock(total)을 계산하고, 위에서 선언한 함수 사용
    }
}

// 대소비교
// 1. 두 정수 입력 시 첫 번째 정수가 크거나 같으면 True 아니면 False이다.
// 2. 큰 값을 다른 함수에서 출력한다.

// 두 정수 비교 후 true,false 출력하기
function isBigger(num1, num2, callback){
    if(callback){
        // 삼항연산자를 이용해서 두 수를 비교하기
        // printBigger로 보내기
        callback(num1<num2?num2:num1==num2?"두 수는 같습니다.":num1);
    }
    return num1>=num2;
}

// 큰 값을 출력하는 함수
function printBigger(result){
    console.log(result);
}

console.log(isBigger(10,10,printBigger));