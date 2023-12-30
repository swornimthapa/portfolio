// Check viewport width and execute animation only if it meets certain conditions
function executeAnimation() {
  if (window.innerWidth >= 1070) {
    executeInitialAnimation();
  }
  if(window.innerWidth < 1070){
      executeInitalAnimationSmallerScreen();
  }
  executeSecondaryAnimations();
  shakeMouse();
  lineReveal("project-section","project-section");
  reveal("project-section","project-section");
  revealProject("project-main-container.first", "project-main-container.first .project-container");
  revealProject("project-main-container.second", "project-main-container.second .project-container");
  reveal("skills-section","skills-section-container");
  lineReveal("skills-section","skills-section");
  reveal("about-heading","about-heading");
  reveal("about-container","about-intro-container");
  revealProject("about-container","about-photo");
  reveal("contact-heading","contact-heading");
  reveal("left-container ","left-container ");
  revealProject("right-container ","right-container");


}

function executeInitialAnimation() {
  let t1 = gsap.timeline({ debug: true}); 
  t1.from(".logo .active", {
    y: -60,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
  });

  t1.from(".navbar-box ul li", {
    y: -50,
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

function executeInitalAnimationSmallerScreen(){
  let t1 = gsap.timeline(); 
  t1.from(".logo , i", {
    y: -40,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger:0.2,
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
    t2.to(".home-section .line", {
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




function revealProject(containerClass, triggerClass) {
  gsap.to(`.${containerClass} .reveal .parent .child`, {
    duration: 0.5,
    x: "0%",
    ease: Circ.easeInOut,

    scrollTrigger: {
      trigger: `.${triggerClass}`,
      scroller: "body",
      // markers: true,
    },
  });
}

function reveal(containerClass,triggerClass){
  gsap.to(`.${containerClass} .reveal .parent .child `,{
    duration: 0.5,
    y: "0%",
    ease: Circ.easeInOut,
    stagger:0.1,
    scrollTrigger: {
      trigger: `.${triggerClass}`,
      scroller: "body",
    },
  });
}

function lineReveal(containerClass ,triggerClass){
  gsap.to(`.${containerClass} .line`,{
    height: "100%",
    duration: 2,
    scrollTrigger:{
      trigger: `.${triggerClass}`,
      scroller:"body",
    }
  })
}

executeAnimation();

let allImage = document.querySelectorAll(".zoom");

for(let temp of allImage){
  temp.addEventListener("mouseover",() =>{
      gsap.to(temp,{
        duration:0.3,
        scale:1.2,
      })
  });

  temp.addEventListener("mouseleave",() =>{
    gsap.to(temp,{
      duration:0.3,
      scale:1,
    })
});
}

