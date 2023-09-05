// landing
var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from("#lp-img", {
    duration:2,
    opacity:0,
    x:-200,
});
tl.from("#lp-text", {
    duration:2,
    opacity:0,
    x:200,
}, "-=2");
tl.from("#navbar", {
    duration:2,
    opacity: 0,
})

// scroll animations
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    start: "top center",
    end: "center center",
    toggleActions: "restart reverse restart reverse",
    scrub: true,
});

    // service
    gsap.to("#l-service", {
        scrollTrigger: "#l-service",
        duration:2,
        opacity:1,
        stagger:0.5,
        y: 0,
    });

    gsap.to(".life-service-tab", {
        scrollTrigger: "#l-service",
        duration:2,
        opacity:1,
        stagger:0.5,
        y: 0,
    });

    gsap.to("#lst-bar-vertical", {
        scrollTrigger: "#l-service",
        delay:1,
        duration:2,
        opacity:1,
        scaleY: 1,
    });

    // skill
    gsap.to("#h1-ls-title", {
        scrollTrigger: "#l-skill",
        duration:2,
        opacity:1,
        x: 0,
    });

    gsap.to("#lsi-header", {
        scrollTrigger: "#l-skill",
        duration:2,
        opacity:1,
        stagger:0.5,
        x: 0,
    });

    // experience
    gsap.to("#h1-le-title", {
        scrollTrigger: "#l-experience",
        duration:2,
        opacity:1,
        x: 0,
    });

    gsap.to("#le-item", {
        scrollTrigger: "#l-experience",
        duration:2,
        opacity:1,
        stagger:0.5,
        y: 0,
    });

    // contact
    gsap.to("#h1-lc-title", {
        scrollTrigger: "#l-contact",
        duration:2,
        opacity:1,
        stagger:0.5,
        x: 0,
    });
    gsap.to("#lc-item", {
        scrollTrigger: "#l-contact",
        duration:2,
        opacity:1,
        stagger:0.5,
        y: 0,
    });