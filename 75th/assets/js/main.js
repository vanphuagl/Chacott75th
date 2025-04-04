"use strict";

const init = () => {
  console.clear();
  // gsap config
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  ScrollTrigger.clearScrollMemory("manual");
  ScrollTrigger.refresh();
  if (window.innerWidth < 1024) {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });
  }
  // app height
  appHeight();
  if (document.getElementById("homepage")) {
    // init loader
    initLoader();
    // logo shrink
    scrollEvents();
  }
  // lazy load
  const ll = new LazyLoad({
    threshold: 0,
  });
  // session storage loading
  // document.body.classList.remove("fadeout");
  sessionStorage.setItem("opening-displayed", !0);
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
        // animation: gsap.fromTo(
        //   "[data-logo-shrink]",
        //   { opacity: 1 },
        //   { opacity: 0, duration: 1, ease: Power4.easeInOut }
        // ),
        // trigger: "[data-top-chacott]",
        // start: "top+=10% center",
        // end: "top+=10% center",
        // toggleActions: "play none reverse none",
        // markers: true,
      });
    },
  });

  if (sessionStorage.getItem("opening-displayed") === "true") {
    document.querySelector("[data-loading]").remove();
    document.querySelector("[data-logo-shrink]").classList.add("is-done");
    lenis.start();
    preloader.to("[data-logo-shrink], [data-header-logo], [data-scrolldown]", {
      opacity: 1,
    });
  } else {
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
      .to(
        "[data-logo-shrink]",
        {
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            gsap.to("[data-loading]", {
              zIndex: "-100",
            });
          },
        },
        "-=0.7"
      )
      .to("[data-header-logo], [data-scrolldown]", {
        opacity: 1,
        duration: 1,
        delay: 3.8,
        ease: Power4.easeInOut,
      });
  }
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
        invalidateOnRefresh: true,
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
          gsap.to("[data-header-logo]", {
            opacity: 0,
            duration: 0.2,
          });
          gsap.to("[data-logo-shrink] svg", {
            y: 0,
          });
          // ===
          if (isMobile) {
            gsap.to("[data-scrolldown]", {
              opacity: 0,
              duration: 0.2,
            });
          }
        },
        onEnterBack: () => {
          gsap.to("[data-header-logo]", {
            opacity: 1,
            duration: 0.2,
          });
          gsap.to("[data-logo-shrink] svg", {
            y: isMobile ? -30 : 0,
          });
          // ===
          if (isMobile) {
            gsap.to("[data-scrolldown]", {
              opacity: 1,
              duration: 0.2,
            });
          }
        },
      });
      // scroll hide chacott logo
      ScrollTrigger.create({
        trigger: "[data-anni]",
        start: "top bottom",
        end: "top bottom",
        markers: false,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.to(".top_chacott_inner, [data-scrolldown]", {
            opacity: 0,
            duration: 0.2,
          });
        },
        onEnterBack: () => {
          gsap.to(".top_chacott_inner, [data-scrolldown]", {
            opacity: 1,
            duration: 0.2,
          });
        },
      });
      // scroll fixed logo show/hide scrolldown
      if (isMobile) {
        ScrollTrigger.create({
          trigger: "[data-top-chacott]",
          start: "bottom bottom",
          end: "bottom bottom",
          markers: false,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.to("[data-scrolldown]", {
              opacity: 1,
              duration: 0.2,
            });
          },
          onEnterBack: () => {
            gsap.to("[data-scrolldown]", {
              opacity: 0,
              duration: 0.2,
            });
          },
        });
      }
      // scroll sticky anni logo
      if (isMobile) {
        gsap.to(".anni_logo", {
          scrollTrigger: {
            trigger: ".anni",
            start: "top top",
            pin: ".anni_logo",
            markers: false,
          },
        });
      }
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
window.addEventListener("pageshow", function () {
  addFadeOnElements(fadeInArray);
});

// ===== scroll fixed section footer =====
const hideLogoShrink = gsap.timeline({
  scrollTrigger: {
    trigger: "[data-top-chacott]",
    start: "top+=10% center",
    end: "top+=10% center",
    markers: false,
    invalidateOnRefresh: true,
    onEnter: () => {
      gsap.to("[data-logo-shrink]", {
        opacity: 0,
        duration: 1,
        ease: Power4.easeInOut,
      });
    },
    onEnterBack: () => {
      gsap.to("[data-logo-shrink]", {
        opacity: 1,
        duration: 1,
        ease: Power4.easeInOut,
      });
    },
  },
});

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

// ===== reszie refresh scroll trigger =====
window.addEventListener("resize", () => {
  if (window.innerWidth > 1023) {
    ScrollTrigger.refresh();
  }
});

// ===== click add fadeout =====
document.addEventListener("click", function (e) {
  const link = e.target.closest(
    'a:not([href^="#"]):not([target]):not([href^="mailto"]):not([href^="tel"])'
  );
  if (!link) return;

  e.preventDefault();
  const url = link.getAttribute("href");

  if (url && url !== "") {
    const idx = url.indexOf("#");
    const hash = idx !== -1 ? url.substring(idx) : "";

    if (hash && hash !== "#") {
      try {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return false;
        }
      } catch (err) {
        console.error("Invalid hash selector:", hash, err);
      }
    }

    document.body.classList.add("fadeout");
    setTimeout(function () {
      window.location = url;
    }, 500);
  }

  return false;
});

// ===== click hash =====
function handleHash() {
  const hash = window.location.hash;
  if (hash) {
    ScrollTrigger.refresh();
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: target, offsetY: 0 },
          onComplete: () => {
            window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
            gsap.to(
              "[data-logo-shrink], [data-header-logo], [data-scrolldown]",
              {
                opacity: 0,
              }
            );
            setTimeout(() => {
              document.body.classList.remove("fadeout");
            }, 100);
          },
        });
      }
    }, 100);
  } else {
    document.body.classList.remove("fadeout");
  }
}
window.addEventListener("load", handleHash);

// ===== details page =====
if (document.getElementById("detailspage")) {
  document.body.classList.remove("fadeout");
  const detailsSwiper = new Swiper(".detail_gallery", {
    breakpoints: {
      0: {
        slidesPerView: 1.235,
        spaceBetween: 15,
        allowTouchMove: true,
        draggable: true,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        draggable: false,
        allowTouchMove: false,
      },
    },
  });
}

// DOMContentLoaded
window.addEventListener("load", init);
