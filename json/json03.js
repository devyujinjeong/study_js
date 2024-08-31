// 1. 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다. 
// 2. 3개의 Object를 1개의 Array 객체에 모두 담는다.
// 3. JSON으로 변경시킨다.

function Product(productName,productPrice,productStock){
    this.productName = productName;
    this.productPrice = productPrice;
    this.productStock = productStock;
}

// 각각의 제품을 만들고, 이를 array에 담기
let product1 = new Product('새우깡', 1500, 200);
let product2 = new Product('바나나킥', 1000, 300);
let products = new Array(product1,product2);

//JSON 파일로 만들기
const productJSON = JSON.stringify(products);
console.log(productJSON);

// 원래대로 만들기
const parseProduct = JSON.parse(productJSON);
console.log(parseProduct);