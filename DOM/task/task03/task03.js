// 숫자 변경하기
function change(number){
    const numbering = document.querySelector("#round");
    const p = document.querySelector("#result");
    const hangle = "공일이삼사오육칠팔구";
    let result = '';

    // 만약 숫자가 아니라면
    // isNaN : is not a number (숫자가 아니면 true반환, 맞으면 false)
    if(isNaN(number)){
        numbering.innerText = '4';
        p.innerText = '숫자만 입력할 수 있습니다.';
        return;
    }

    // 숫자가 맞다면 3으로 변경
    numbering.innerText = '3';

    if(number.includes('.')){
        numbering.innerText = '2';
    }

    number.split("").forEach(i => {
        result += hangle[i];
    });

    result = result.replace('undefined', '점')
    p.innerText = result;
}

function getResult(callback){
    const input = document.querySelector("input[name=input]").value;
    if(callback(input));
}

document.querySelector("#change").addEventListener("click", () => {getResult(change)});