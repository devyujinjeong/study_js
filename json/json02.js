const user1 = {id: "jyj", name: "정유진"};
const user2 = {id: "hgd", name: "홍길동"};
const users = new Array(user1, user2);

const usersJSON = JSON.stringify(users);
console.log(usersJSON);

const parsedUsers = JSON.parse(usersJSON);
console.log(parsedUsers);