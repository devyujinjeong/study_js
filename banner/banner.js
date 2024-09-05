HTMLCollection.prototype.forEach = Array.prototype.forEach;
let count = 0;

const bannerWrap = document.querySelector("div.banner-container");
const banners = document.querySelectorAll("div.image");

banners.forEach((banner, i) => {
    if(i == banners.length - 1) {
        i = 0;
    }
    banner.style.backgroundImage = `url('images/00${i + 1}.png')`
});

const silde = setInterval(autoSlide, 1000);

function autoSlide(){
    bannerWrap.style.transition = `transform 0.5s`;
    bannerWrap.style.transform = `translate(-${1500 * ++count}px)`;

    // 이 코드는 마지막 사진일 경우 다시 처음 사진으로 돌아가게 하기 위한 코드
    if(count == 6){
        setTimeout(() => {
            bannerWrap.style.transition = `transform 0s`;
            bannerWrap.style.transform = `translate(0)`;
        }, 500)

        // count를 0으로 초기화 하여 다시 처음 슬라이드 부터 시작할 수 있게 함
        count = 0;
    }
}