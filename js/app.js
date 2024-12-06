new Swiper(".slider", {
  // direction: "vertical",
  speed: 2400,
  mousewheel: {
    enabled: true,
    sensitivity: 2.4,
  },
  spaceBetween: 18,
  parallax: true,
  freeMode: true,
});
document.addEventListener("DOMContentLoaded", function () {
  var audio = document.querySelector(".audio");
  audio.volume = 0.03;
});
