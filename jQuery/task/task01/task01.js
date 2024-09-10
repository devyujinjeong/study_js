// dom에 있는 task에서 바꿀 수 있는 부분들 jQuery로 바꾸기
globalThis.$temp;

function confirm(){
    let check = false;
    // const input = document.querySelector("#input");
    // const trs = document.querySelectorAll("tbody tr");
    const $input = $("#input");
    const $trs = $("tbody tr");

    if(globalThis.$temp){
        // temp.style.backgroundColor = 'white';
        // temp.firstElementChild.innerText = temp.firstElementChild.innerText.replace('★', '')
        globalThis.$temp.css('background-color', 'white');
        globalThis.$temp.find('td:first-child').text(globalThis.$temp.find('td:first-child').text().replace('★', ''));
    }
    
    // trs.each(function(i, tr){
        
    // })
        
    // trs.forEach(tr => {
    //     let target = input.value;
    //     let text = tr.firstElementChild.innerText;
    //     if(target === text){
    //         check = true;
    //         globalThis.temp = tr;
    //         tr.style.backgroundColor = "#ef5350";
    //         tr.firstElementChild.innerText = '★' + text;
    //         return;
    //     }
    // });

    $.each($trs, function(i, tr){
        let target = $input.val();
        let text = $(tr).find('td:first-child').text();

        if(target === text){
            check = true;
            globalThis.$temp = $(tr);
            $(tr).css('background-color', '#ef5350');
            $(tr).find('td:first-child').text('★' + text);
            return;
        }
    });

    if(!check){
        alert("다시 시도해주세요.");
    }

    // input.value = '';
    $input.val('');

}