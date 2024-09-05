// HTMLCollection 객체에 Array.prototype.forEach를 할당하여
// HTMLCollection에서도 forEach 메서드를 사용할 수 있게 하기.
HTMLCollection.prototype.forEach = Array.prototype.forEach;

// 슬라이드 이동을 위한 카운터 변수
let count = 0;

const bannerWrap = document.querySelector("div.banner-container");
const banners = document.querySelectorAll("div.image");

// 각 배너 이미지에 순차적으로 이미지를 적용하기 위한 반복문
// 각 이미지 요소와 인덱스를 인수로 받아서 처리하기
banners.forEach((banner, i) => {
    // 마지막 이미지인 경우 다시 첫 번째 이미지를 가리키도록 설정하기
    if(i == banners.length - 1) {
        i = 0;
    }
    // 각 배너에 배경 이미지 URL을 순차적으로 적용
    // i + 1을 통해 001, 002, 003과 같은 형식의 이미지를 참조
    banner.style.backgroundImage = `url('images/00${i + 1}.png')`;
});

// 자동 슬라이드 기능을 1000ms(1초)마다 실행하도록 설정
const silde = setInterval(autoSlide, 1000);

// 자동 슬라이드 함수
function autoSlide(){
    // 슬라이드가 이동할 때의 애니메이션 효과를 설정(0.5초 동안 변환)
    bannerWrap.style.transition = `transform 0.5s`;
    
    // 슬라이드를 1500px만큼 이동 시키고, count 값을 증가시키며 이동 거리를 계산
    bannerWrap.style.transform = `translate(-${1500 * ++count}px)`;

    // 마지막 슬라이드(6번째 이미지)까지 왔을 경우 처음으로 다시 돌아가도록 설정합니다.
    if(count == 6){
        // 0.5초의 애니메이션이 끝난 후 transition을 0초로 설정하여 깜빡임 없이 처음 슬라이드로 돌아가게 됨
        setTimeout(() => {
            bannerWrap.style.transition = `transform 0s`;
            bannerWrap.style.transform = `translate(0)`;
        }, 500);

        // count 값을 0으로 초기화하여 첫 번째 슬라이드로 돌아가도록 합니다.
        count = 0;
    }
}
