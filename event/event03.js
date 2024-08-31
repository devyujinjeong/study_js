const file = document.querySelector("#attach");

file.addEventListener('change', function(e){
    // e.target: input type file 객체
    // files 프로퍼티는 업로드된 파일의 정보를 가지고 있는 FileList이다.
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        document.querySelector('div.add-image').style.backgroundImage = `url('${e.target.result}')`;
    }
});