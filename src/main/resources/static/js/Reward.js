// < 상단 메뉴 페이지 이동 함수 >
// face
function click_Home() {
  window.location.href =
    "/LookAtMe/src/main/resources/templates/Home/homeFace.html";
}

// < 메인 메뉴 페이지 이동 함수 >
// procedure
function click_procedure() {
  window.location.href = "";
}

// rewardMall
function click_rewardMall() {
  window.location.href =
    "/LookAtMe/src/main/resources/templates/Reward/rewardMall.html";
}

// < 스크롤 좌우 메뉴 >
// 스크롤 바를 없애고 마우스로 컨트롤 가능하도록 구현
// JavaScript로 스크롤 동작 구현
const scrollWrap = document.getElementById("scrollWrap");
let isDown = false;
let startX;
let scrollLeft;

scrollWrap.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - scrollWrap.offsetLeft;
  scrollLeft = scrollWrap.scrollLeft;
});

scrollWrap.addEventListener("mouseleave", () => {
  isDown = false;
});

scrollWrap.addEventListener("mouseup", () => {
  isDown = false;
});

scrollWrap.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollWrap.offsetLeft;
  const walk = (x - startX) * 2; // 스크롤 속도 조절을 위한 계수 (2)
  scrollWrap.scrollLeft = scrollLeft - walk;
});
