let user = {id: "hds", pw: "1234", name: "정유진"};
// json으로 변경하기 (JSON.stringify())
let userJSON = JSON.stringify(user);
console.log(userJSON);

// 원래대로 변경하기(JSON.parse())
user = JSON.parse(userJSON);
console.log(user);