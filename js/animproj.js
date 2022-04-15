var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from(".inpt", {
    duration:2,
    opacity:0,
    x: -100,
},);
tl.from(".inpimg", {
    duration:2,
    y:300,
    opacity: 0,
}, "-=1");
tl.from(".back", {
    duration:2,
    opacity:0,
    x:-100,
});
tl.from(".inpd", {
    duration:2,
    opacity: 0,
    x: -100,
}, "-=2");