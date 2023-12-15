// Check viewport width and execute animation only if it meets certain conditions
function executeAnimation() {
  if (window.innerWidth >= 1070) {
    executeInitialAnimation();
  }
  executeSecondaryAnimations();
  shakeMouse();
  reveal("project-main-container.first", "project-main-container.first .project-container");
reveal("project-main-container.second", "project-main-container.second .project-container");
}

function executeInitialAnimation() {
  let t1 = gsap.timeline(); 
  t1.from(".logo .active", {
    y: -150,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
  });

  t1.from(".navbar-box ul li", {
    y: -150,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  });

  t1.from(".mouse", {
    duration: 0.5,
    scale: 0,
    rotate: 360,
    opacity: 0,
  });

  
}

function executeSecondaryAnimations(){
    let t2 = gsap.timeline();
    t2.to(".line", {
      height: "100%",
      duration: 1,
      delay: 1,
    });
  
    t2.to(".intro-container .start .curtain-reveal", {
      width: 0,
      duration: 0.5,
      delay: 0.2,
      ease: Circ.easeOutIn,
    });
  
    t2.to(".intro-container  .curtain-reveal", {
      width: 0,
      duration: 1,
      // delay:0.2,
      ease: Circ.easeOutIn,
      stagger: 0.2,
    });
}

function shakeMouse() {
  let t2 = gsap.timeline({ repeat: -1 });
  t2.to(".mouse", {
    duration: 0.3,
    x: -5, // Move 5 pixels to the left
    ease: "power1.inOut",
  });
  t2.to(".mouse", {
    duration: 0.3,
    x: 5, // Move 5 pixels to the right
    ease: "power1.inOut",
  });
  t2.to(".mouse", {
    duration: 0.3,
    x: 0, // Move back to the original position
    ease: "power1.inOut",
  });
}




function reveal(containerClass, triggerClass) {
  gsap.to(`.${containerClass} .reveal .parent .child`, {
    duration: 0.5,
    x: "0%",
    ease: Circ.easeInOut,

    scrollTrigger: {
      trigger: `.${triggerClass}`,
      scroller: "body",
      // markers: true, // Enable markers for testing (you can remove this in production)
    },
  });
}

executeAnimation();
