const id = document.querySelector("input[name=id]");
const password = document.querySelector("input[name=password]");
const idMessage = document.querySelector("#id-message");
const passwordMessage = document.querySelector("#password-message");

// blur 이벤트 : 요소가 포커스를 잃을 때 발생하게 됨
id.addEventListener("blur", function(){
    // 입력 필드가 비어 있는 경우
    if(!this.value){
        idMessage.innerText = '아이디를 입력해주세요.';
        idMessage.style.color = 'red';
        // 아이디 입력 필드에 다시 포커스 주기
        // 아무것도 입력 되지 않는 경우에는 다음으로 넘어가지 않고
        // 입력 필드에 포커스가 맞춰진다.
        this.focus(); 
        return;
    }

    idMessage.innerText = '멋진 아이디네요!';
    idMessage.style.color = 'blue';
    
});

// change 이벤트 : 값 변경 후 필드값을 벗어났을 때 발생
password.addEventListener("change", function(e){
    console.log(e.target.value); // 콘솔 창에 내가 입력한 비밀번호가 나옴
});

