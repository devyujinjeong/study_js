// 버튼 가져오기
const button = document.querySelector("#register");
// 선택할 나이 가져오기 (클래스)
const ages = document.getElementsByClassName("ages");
const prices = document.getElementsByClassName("price");

// 이전에 선택된 요소를 추적하기 위한 변수
let previousAge = null;
let previousPrice = null;

// 버튼 클릭 이벤트 핸들러
button.addEventListener('click', function() {
    // 입력한 값을 가져오기
    const input = document.querySelector("input[type=text]");
    let age = input.value.trim(); // 입력값에서 공백 제거

    // 아동, 청소년, 성인 외의 값이 입력되면 경고 문구 표시
    if (age !== "아동" && age !== "청소년" && age !== "성인") {
        alert('다시 시도해주세요');
        return; // 함수 종료
    }

    let selectedAge = null;
    let selectedPrice = null;

    // 아동, 청소년, 성인과 일치하는 요소를 찾음
    for (let i = 0; i < ages.length; i++) {
        if (ages[i].textContent.trim() === age) {
            selectedAge = ages[i];
            selectedPrice = prices[i];
            break;
        }
    }

    // 이전에 선택된 요소가 있으면 스타일을 초기화
    if (previousAge) {
        previousAge.style.backgroundColor = ''; // 배경색 초기화
        previousPrice.innerText = previousPrice.innerText.replace('★', ''); // 별 모양 제거
    }

    // 새로 선택된 요소가 있으면 스타일을 변경
    if (selectedAge && selectedPrice) {
        selectedAge.style.backgroundColor = 'red'; // 배경색을 빨간색으로 변경
        selectedPrice.innerText = '★' + selectedPrice.innerText; // 별 모양 추가

        // 현재 선택된 요소를 이전 요소로 저장
        previousAge = selectedAge;
        previousPrice = selectedPrice;
    }
});
