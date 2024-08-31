// 댓글 만들기
const member = new Object();
const post = new Object(); // 게시물
const postMember = new Object(); // 게시물을 작성한 사람
const reply = new Object(); // 댓글
const replyMember = new Object(); // 댓글 단 사람

member.id = 1;
member.memberId = 'jyj1234';
member.memberPassword = '1234';
member.memberPoint= 3000;

post.id = 3;
post.postTitle = '테스트 제목';
post.postContent = '테스트 내용';
post.member = postMember;

reply.id = 4;
reply.postTitle = '댓글 테스트';
reply.member = replyMember;

console.log(member);
console.log(reply);
console.log(post);