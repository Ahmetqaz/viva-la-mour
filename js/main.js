// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var body = document.body;

// const closeMenu = () => {
//   menu.classList.remove("active");
//   menuBtn.classList.remove("active");
//   body.classList.remove("active");
// };

// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     closeMenu();
//   }
// };

// const header = document.getElementById("header");
// if (header)
//   window.addEventListener("scroll", () => {
//     if (document.documentElement.scrollTop > 400) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//   });
  

///WOW JS
// new WOW().init({
//   boxClass: "wow",
// });
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}


// video ----------------
// const video = document.querySelector("#video");
// if (video) {
//   const videoButton = document.getElementById("videoButton");
//   const videoBg = document.getElementById("videoBg");
//   const videoBody = document.querySelector(".video__content");
//   let videoCondition = false;

//   const playVideo = () => {
//     video.play();
//     video.setAttribute("controls", "");
//     videoBg.classList.add("active");
//     videoButton.classList.add("_stop");
//     video.addEventListener("mouseover", function () {
//       videoButton.classList.remove("_hide");
//     });
//     video.addEventListener("mouseout", function (e) {
//       videoButton.classList.add("_hide");
//     });
//     videoButton.addEventListener("mouseover", function () {
//       videoButton.classList.remove("_hide");
//     });
//   };

//   const pauseVideo = () => {
//     video.pause();
//     videoButton.classList.remove("_stop");
//     videoButton.classList.remove("_hide");
//     videoBg.classList.remove("active");
//     video.addEventListener("mouseout", function (e) {
//       videoButton.classList.remove("_hide");
//     });
//   };

//   const videoControl = () => {
//     videoButton.onclick = () => {
//       if (videoCondition) {
//         playVideo();
//       } else {
//         pauseVideo();
//       }
//     };
//     video.addEventListener("ended", function () {
//       pauseVideo();
//       videoCondition = !videoCondition;
//     });
//   };

//   const videoTouch = () => {
//     videoControl();
//     videoBody.addEventListener("click", () => {
//       videoCondition = !videoCondition;
//       if (videoCondition) {
//         playVideo();
//       } else {
//         pauseVideo();
//       }
//     });
//   };
//   videoTouch();
// }
// video ----------------


// let scrollTop = document.getElementById("scrollTop");
// if (scrollTop) {
//   scrollTop.onclick = () => {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   };
// }