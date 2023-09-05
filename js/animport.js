// opening animation
var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from("#navbar", {
    duration:2,
    opacity:0
},);
tl.from("#portfolio", {
    duration:2,
    opacity:0
}, "-=2");
tl.from(".portfolio-btn", {
    duration:2,
    y:200,
    stagger: 0.25,
    opacity: 0,
}, "-=1.5");
tl.from(".portfolio-content", {
    duration:2,
    y:400,
    opacity: 0,
    stagger: 0.5,
}, "-=2");