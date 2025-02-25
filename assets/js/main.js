"use strict";

const init = () => {
  console.clear();
  // gsap config
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.clearScrollMemory("manual");
  ScrollTrigger.refresh();
  if (window.innerWidth < 1024) {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });
  }
  // app height
  appHeight();
  // init loader
  initLoader();
  // logo shrink
  scrollLogoShrink();
  // lazy load
  const ll = new LazyLoad({
    threshold: 0,
  });
};

// ===== lenis =====
const lenis = new Lenis({
  lerp: 0.05,
  smoothWheel: true,
});
lenis.on("scroll", ScrollTrigger.update);
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ===== init loader =====
const initLoader = () => {
  lenis.stop();
  const preloader = gsap.timeline({
    onComplete: () => {
      lenis.start();
    },
  });

  preloader
    .to("[data-loading-logo]", {
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: Power4.easeInOut,
    })
    .to("[data-loading-overlay]", {
      top: 0,
      duration: 1.8,
      ease: Power4.easeOut,
      onComplete: () => {
        gsap.to("[data-loading]", {
          zIndex: "-100",
        });
      },
    })
    .to("[data-header-logo], [data-scrolldown]", {
      opacity: 1,
      duration: 1,
      delay: 4.5,
      ease: Power4.easeInOut,
    });
};

// ===== app height =====
const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty(
    "--app-height",
    `${document.documentElement.clientHeight}px`
  );
};
window.addEventListener("resize", appHeight);

// ===== logo shirnk =====
const scrollLogoShrink = () => {
  // ==== create
  let mmg = gsap.matchMedia(),
    breakPoint = 1024;

  mmg.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let { isMobile } = context.conditions;

      ScrollTrigger.create({
        animation: gsap.from("[data-logo-shrink]", {
          height: "100%",
          width: "100%",
          duration: 1,
          ease: "power1.inOut",
        }),
        start: 100,
        trigger: "[data-offset-top]",
        start: "top+=50 top",
        end: "top top",
        toggleActions: "play none reverse none",
        markers: false,
        onEnter: () => {
          gsap.to("[data-header-logo], [data-scrolldown]", {
            opacity: 0,
            duration: 0.5,
          });
        },
        onEnterBack: () => {
          gsap.to("[data-header-logo], [data-scrolldown]", {
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
          });
        },
      });
    }
  );
};

// ===== scroll fade up content =====
const [fadeInArray] = [document.querySelectorAll("[data-fadein]")];
const addFadeOnElements = function (elements) {
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      let elem = elements[i];
      let distInView =
        elem.getBoundingClientRect().top - window.innerHeight + 100;
      if (distInView < 0) {
        elem.classList.add("--visible");
      }
    }
  }
};

window.addEventListener("scroll", function () {
  addFadeOnElements(fadeInArray);
});

// ===== scroll hidden header logo =====
ScrollTrigger.create({
  animation: gsap.to("[data-logo-shrink]", {
    opacity: 0,
    duration: 0.8,
    ease: Power4.easeInOut,
  }),
  trigger: "[data-top-chacott]",
  start: "top+=10% center",
  end: "top+=10% center",
  toggleActions: "play none reverse none",
  markers: false,
});

// ===== scroll fixed section footer =====
let panels = gsap.utils.toArray("section");
panels.pop(); // get rid of the last one (don't need it in the loop)
panels.forEach((panel, i) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: panel,
      start: "bottom bottom",
      pinSpacing: false,
      pin: true,
      scrub: true,
      markers: false,
      invalidateOnRefresh: true,
      onRefresh: () => {
        gsap.set(panel, {
          transformOrigin:
            "center " +
            (window.innerHeight + panel.offsetHeight - window.innerHeight / 2) +
            "px",
        });
      },
    },
  });
});

window.onresize = function () {
  ScrollTrigger.refresh();
};

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", init);
