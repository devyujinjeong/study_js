// querySelector을 이용해서 id가 register인 것을 가져와서 button에 담기
const button = document.querySelector("#register");
// querySelector을 이용해서 div에서 클래스가 square인 객체 가져오기
const divs = document.querySelectorAll("div.square");

// 전역변수
globalThis.name;

// 내용을 초기화 시켜주는 함수
function initText(){
    divs.forEach(div => div.innerText = "");
}

// square를 누르면 이름이 보이게 하는 이벤트
// 클릭 이벤트 삭제하기
function removeEvent(){
    divs.forEach(div => div.removeEventListener("click", showText));
}

// 클릭 이벤트 추가하기
function setName(name){
    globalThis.name = name;
    divs.forEach(div => div.addEventListener("click", showText));
}

// 이름 보여주기.
function showText(){
    let name = globalThis.name[this.getAttribute("id")];
    this.innerText = name ? name : "♥";
}

// 버튼을 클릭했을 때, 실행되는 함수
button.addEventListener("click", function(){
    // input태그에서 이름 가져오기
    const input = document.querySelector("input[name=name]");
    // name에 값을 담기
    let name = input.value;
    // length에 이름의 길이를 담기
    let length = name.length;
    initText();

    // 만약에 이름이 없거나, 이름이 2글자 미만이고 3글자 초과일 경우에 removeEvent 발생하게 하기
    if(!name || length < 2 || length > 3){
        removeEvent();
        return;
    }
    setName(name);
});