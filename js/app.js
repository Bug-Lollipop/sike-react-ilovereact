// 当页面加载完毕时开始动画。
window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
};
// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  // ...
  updateSliderControl();
}

function updateSliderControl() {
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a")

  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var section = document.querySelector(link.getAttribute('href'));
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetTop + section.offsetHeight;

    // 检查 window.scrollY 是否在这部分中
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}


function animateLogo() {
  TweenMax.fromTo(".react-logo", 2, {
    css: {
      y: "-10px"
    }
  }, {
    css: {
      y: "10px"
    },
    repeat: -1,

    yoyo: true,

    ease: Power2.easeInOut,

  })
}

function animateRobot() {
  var t = new TimelineMax({
    yoyo: true,
    repeat: -1,
    ease: Elastic.easeInOut
  });
  // t.to(".android-robot",1,{x: 200})
  t.to(".android-robot", 2, {
      rotation: "-55deg"
    })
    .to(".android-robot", 0.5, {
      rotation: "-45deg"
    });
}

function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window, 1, {
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  //返回匹配的元素集合
  var links = document.querySelectorAll("#slider-control a");

  for (i = 0; i < links.length; i++) {
    var link = links[i];

    link.addEventListener("click", function(event) {
      event.preventDefault();

      // `event` 是鼠标点击事件

      // BUG 警告！使用闭包或者 ES6 `let` 修复。
      var href = this.getAttribute('href');
      scrollToElement(document.querySelector(href));
      console.log(this);
    });
  }
}
