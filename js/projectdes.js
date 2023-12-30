

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
});


