// 회원 정보
// 번호, 아이디, 비밀번호, 포인트
// 포인트 적립, 포인트 사용
// 만들고 사용까지!! --> %로도 접근하고, 그냥 돈 적립하는 식으로도 접근해보기

// 객체는 항상 const(불변성)에 선언해야 한다.
const member = {};

member.savePoint=savePoint;
member.usePoint=usePoint;

function savePoint(point){this.memberPoint += point;}

function usePoint(point){this.memberPoint -= point;}

member.id = 1;
member.memberId ='jyj1234';
member.memberPassword ='1234';
member.memberPoint=10000;
member.savePoint(10000);
member.usePoint(5000);

console.log(member);
console.log(member.memberPoint);