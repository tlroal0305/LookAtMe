// < 로그인 페이지 이동 >
function back_Intro() {
  window.location.href = "/LookAtMe/src/main/resources/templates/Intro.html";
}

// < 광고 반복 기능 구현 >
const images = [
  "/LookAtMe/src/main/resources/static/img/ad1.jpg",
  "/LookAtMe/src/main/resources/static/img/ad2.png",
  "/LookAtMe/src/main/resources/static/img/ad3.png",
];

const changingImage = document.getElementById("changingImage");
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  changingImage.src = images[currentIndex];
}

setInterval(changeImage, 2000);

// < 스크롤 >
document.getElementById("hospital").addEventListener("scroll", function () {
  console.log("스크롤 위치:", this.scrollTop);
});

// < 메인 페이지 이동 함수 >
// face
function click_face() {
  window.location.href =
    "/LookAtMe/src/main/resources/templates/Home/homeFace.html";
}
// eye
function click_eye() {
  window.location.href =
    "/LookAtMe/src/main/resources/templates/Home/homeEye.html";
}
// mouth
function click_mouth() {
  window.location.href =
    "/LookAtMe/src/main/resources/templates/Home/homeMouth.html";
}
// body
function click_body() {
  window.location.href =
    "/LookAtMe/src/main/resources/templates/Home/homeBody.html";
}
