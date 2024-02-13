"use strict";

/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_meatball");
const navigation = document.querySelector(".js_nav");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});

/*---------- KVアニメーション ----------*/
const opening = document.querySelector(".js_opening");

function OpeningAnime() {
  body.classList.toggle("is_hidden");
  gsap
    .timeline(function () {})
    .from(".js_opening-txt", {
      duration: 1,
      autoAlpha: 0,
      y: 40,
    })
    .to(".js_opening", {
      autoAlpha: 0,
      duration: 0.6,
      delay: 1.2,
    })
    .from(".js_copy", {
      duration: 0.4,
      autoAlpha: 0,
      x: -100,
    })
    .from(".js_sub-copy__1", {
      duration: 0.4,
      autoAlpha: 0,
      x: -100,
    })
    .from(".js_sub-copy__2", {
      duration: 0.6,
      autoAlpha: 0,
      x: -100,
    })
    .from(".js_sub-copy__3", {
      duration: 0.8,
      autoAlpha: 0,
      x: -100,
    })
    .from(".js_kv-icon__set", {
      duration: 0.8,
      autoAlpha: 0,
      y: -100,
      x: -100,
    })
    .from(".top_kv-scroll", {
      duration: 1.2,
      autoAlpha: 0,
      y: -200,
      rotation: 360,
      onComplete: function () {
        body.classList.toggle("is_hidden");
      },
    });
}

OpeningAnime();

/*---------- policyのスライドイン ----------*/
gsap.from(".js_policy", {
  y: 200,
  autoAlpha: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".js_policy-trigger",
    start: "top center",
    // markers: true,
    onEnter: function () {
      document
        .querySelector(".top_policy_copy__first")
        .classList.add("top_policy_copy-wrapper__underline");
      document
        .querySelector(".top_policy_copy__second")
        .classList.add("top_policy_copy-wrapper__underline");
    },
  },
  stagger: {
    each: 0.8,
    from: "start",
  },
});

/*---------- aboutのスライドイン ----------*/
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".js_about-trigger",
      start: "top center",
      // markers: true,
    },
  })
  .from(".js_about-profile", {
    duration: 0.8,
    autoAlpha: 0,
    y: 150,
  })
  .from(".js_about-info", {
    duration: 1.0,
    autoAlpha: 0,
    x: -200,
  });

/*---------- serviceのスライドイン ----------*/
gsap.from(".js_service_list", {
  y: 200,
  autoAlpha: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".js_service-trigger",
    start: "top center",
    // markers: true,
  },
  stagger: {
    each: 0.8,
    from: "start",
  },
});

/*---------- カルーセルパネル ----------*/
const swiper = new Swiper(".js_works-swiper", {
  loop: true,
  speed: 1200,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 48,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },
});
