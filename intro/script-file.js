/* script-file.html */
// 이미지 바꾸기 함수 
//  삼항 연산자 사용하기!
// event가 over과 같아면 icon2를 보여주고, 아니라면 icon1을 보여주기

function changeImage(event, object) {
  object.src = 'images/' + (event == 'over' ? 'icon2.png' : 'icon1.png');
}
