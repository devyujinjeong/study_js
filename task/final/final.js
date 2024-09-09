let replies = [
    {
        writer: '작성자1',
        content: '테스트 내용1'
    },
    {
        writer: '작성자2',
        content: '테스트 내용2'
    },
    {
        writer: '작성자3',
        content: '테스트 내용3'
    },
    {
        writer: '작성자4',
        content: '테스트 내용4'
    },
    {
        writer: '작성자5',
        content: '테스트 내용5'
    },
    {
        writer: '작성자6',
        content: '테스트 내용6'
    },
    {
        writer: '작성자7',
        content: '테스트 내용7'
    },
];

// 객체에 있는 데이터를 화면에 뿌리기
// append('HTML'), html('HTML')

const $ul = $("ul");
let text = '';

replies.forEach(reply => {
    text += `
        <li>
            <div class="reply">
                <div class="writer">${reply.writer}</div>
                <div class="content">${reply.content}</div>
            </div>
        </li>
    `;
});

$ul.html(text);