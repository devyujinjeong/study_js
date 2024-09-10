// 슬라이드 이동을 위한 카운터 변수
let count = 0;

// jQuery 객체를 전역 변수로 선언
const $bannerWrap = $("div.banner-container");
const $banners = $("div.image");

// 각 배너 이미지에 순차적으로 이미지를 적용하기 위한 반복문
$banners.each((i, banner) => {
    // 각 배너에 배경 이미지 URL을 순차적으로 적용
    $(banner).css("background-image", `url('images/banner00${i + 1}.png')`);
});

// 자동 슬라이드 기능을 1000ms(1초)마다 실행하도록 설정
const slide = setInterval(autoSlide, 1000);

// 자동 슬라이드 함수
function autoSlide() {
    $bannerWrap.css("transition", "transform 0.5s");
    $bannerWrap.css("transform", `translate(-${1020 * ++count}px)`);

    if (count === 3) {
        // 0.5초의 애니메이션이 끝난 후 transition을 0초로 설정하여 깜빡임 없이 처음 슬라이드로 돌아가게 됨
        setTimeout(() => {
            $bannerWrap.css("transition", "transform 0s");
            $bannerWrap.css("transform", "translate(0)");
        }, 500);

        // count 값을 0으로 초기화하여 첫 번째 슬라이드로 돌아가도록 합니다.
        count = 0;
    }
}
