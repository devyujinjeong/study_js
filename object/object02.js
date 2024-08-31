const post = new Object();

post.id = 3;
post.postTitle = '테스트 제목1';
post.postContent = '테스트 내용1';

// 포스트를 작성한 사람의 정보까지 나오게 됨
post.member = {id: 1, memberId: 'jyj1234', memberPassword: '1234', memberPoint: 3000}

console.log(post);