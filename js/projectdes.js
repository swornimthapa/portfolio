

document.body.style.overflow = "hidden";
let t1 = gsap.timeline();

t1.to(".fs",{
    height:0,
    duration:1,
    ease:Expo.easeInOut,
})

t1.to(".nextfs",{
    height:"100%",
    top:0,
    duration:1,
    delay:-1,
    ease:Expo.easeInOut,
})
t1.to(".nextfs",{
    // top:0,
    height:0,   
    duration:1,
    delay:-0.3,
    ease:Expo.easeInOut,
    onComplete: function() {
        document.body.style.overflow = "auto"; // or "visible"
    },
})

if (window.innerWidth <= 865) {
    // Animation specific to mobile view
    t1.to(".right-main-container", {
        // width :"0%",
        width: "100%", // Adjust as needed
        duration: 2,
        delay: -0.3,
        padding: "30px", // Adjust as needed
        ease: Expo.easeInOut,
    });
}else{
    t1.to(".right-main-container",{
        // width:"100%",
        width:"35%",
        duration:2,
        delay:-0.3,
        // padding:"40px",
        ease:Expo.easeInOut,
})
}






