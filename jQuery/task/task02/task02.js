// dom에 있는 task에서 바꿀 수 있는 부분들 jQuery로 다 바꾸기
function change(number){
    // const numbering = document.querySelector("#round");
    // const p = document.querySelector("#result");
    const $numbering = $("#round");
    const $p = $("#result");
    const hangle = "공일이삼사오육칠팔구";
    let result = '';

    if(isNaN(number)){
        // numbering.innerText = '4';
        // p.innerText = '숫자만 입력할 수 있습니다.';
        $numbering.text('4');
        $p.text('숫자만 입력할 수 있습니다.')
        return;
    }

    // numbering.innerText = '3';
    $numbering.text('3');
    
    if(number.includes('.')){
        // numbering.innerText = '2';
        $numbering.text('2');
    }

    number.split("").forEach(i => {
        result += hangle[i];
    });

    result = result.replace('undefined', '점')
    // p.innerText = result;
    $p.text(result);
}

function getResult(callback){
    // const input = document.querySelector("input[name=input]").value;
    const input = $('input[name=input]').val();
    if(callback(input));
}
