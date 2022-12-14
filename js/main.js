// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var headerBtn = document.getElementById("headerBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  headerBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    headerBtn.classList.remove("active");

  }
};
// menu end
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll(".anchor");
function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index]?.classList.add("active");
}
links.forEach((e) => {
  onLinkClick(e);
});
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}
window.onscroll = function () {
  changeLinkState();
  scrollFunc();
};
// scroll end

// slider

$(function () {
  $(".hero__inner-slider").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    arrows: false,
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// video
// let video = document.getElementById("video");

// video.onclick = function () {
//   if (video.paused == true) {
//     video.play();
//   } else {
//     video.pause();
//   }
// };


let playButton = document.getElementById("play");
let banner = document.getElementById("banner");

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();

    playButton.classList.toggle("active");
    banner.classList.toggle("active");

  } else {
    video.pause();

    playButton.classList.remove("active");
    banner.classList.remove("active");

  }
  
});

video.onclick = function () {
  if (video.paused == true) {
    video.play();

    playButton.classList.toggle("active");
    banner.classList.toggle("active");
  }
  else {
    video.pause();

    playButton.classList.remove("active");
    banner.classList.remove("active");

  }
};