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
  scrollEvents();
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
      //  scroll hidden header logo
      ScrollTrigger.create({
        animation:
          gsap.fromTo("[data-logo-shrink]", { opacity: 1 }, { opacity: 0, duration: 1, ease: Power4.easeInOut, }),
        trigger: "[data-top-chacott]",
        start: "top+=10% center",
        end: "top+=10% center",
        toggleActions: "play none reverse none",
        markers: false,
      });
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
      delay: 1,
      ease: Power4.easeOut,
    })
    .to("[data-logo-shrink]", {
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
        gsap.to("[data-loading]", {
          zIndex: "-100",
        });
      },
    }, "-=0.7")
    .to("[data-header-logo], [data-scrolldown]", {
      opacity: 1,
      duration: 1,
      delay: 3.8,
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

// ===== scroll events page =====
const scrollEvents = () => {
  let mmg = gsap.matchMedia(),
    breakPoint = 1024;

  // ==== create
  mmg.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let { isMobile } = context.conditions;

      // scroll logo shrink
      ScrollTrigger.create({
        animation: gsap.from("[data-logo-shrink]", {
          height: "100%",
          width: "100%",
          duration: 1,
        }),
        start: 100,
        scrub: true,
        trigger: ".top",
        start: "top bottom",
        endTrigger: ".top",
        end: "top center",
        markers: false,
      });
      // scroll hide header logo and scrolldown
      ScrollTrigger.create({
        trigger: "[data-offset-top]",
        start: "top+=50 top",
        end: "top top",
        toggleActions: "play none reverse none",
        markers: false,
        onEnter: () => {
          gsap.to("[data-header-logo], [data-scrolldown]", {
            opacity: 0,
            duration: 0.2,
          });
          gsap.to("[data-logo-shrink] svg", {
            y: 0,
          })
        },
        onEnterBack: () => {
          gsap.to("[data-header-logo], [data-scrolldown]", {
            opacity: 1,
            duration: 0.2,
          });
          gsap.to("[data-logo-shrink] svg", {
            y: isMobile ? -30 : 0,
          })
        },
      })
      // scroll hide chacott logo
      ScrollTrigger.create({
        trigger: "[data-anni]",
        start: "top bottom",
        end: "top bottom",
        markers: false,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.to(".top_chacott_inner", {
            opacity: 0,
            duration: 0.2,
          })
        },
        onEnterBack: () => {
          gsap.to(".top_chacott_inner", {
            opacity: 1,
            duration: 0.2,
          })
        }
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

// reszie refresh scroll trigger
window.addEventListener("resize", () => {
  if (window.innerWidth > 1023) {
    ScrollTrigger.refresh();
  }
})

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", init);
