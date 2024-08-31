// 프로토타입
function Member(id, memberId, memberPassword, memberPoint){
    this.id = id;
    this.memberId = memberId;
    this.memberPassword = memberPassword;
    this.memberPoint = memberPoint;
}

const member1 = new Member(1, 'hds1234', '1234', 3000);
const member2 = new Member(2, 'hgd1111', '1111', 1000);

console.log(member1, member2);
console.log(typeof(member1)); //object 타입으로 나옴