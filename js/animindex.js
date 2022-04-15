// index-penlette-lottie
var animation = bodymovin.loadAnimation({
    container: document.getElementById('index-penlette'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://assets7.lottiefiles.com/packages/lf20_os3tkdsb.json',
})


// index-landing
var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from(".h3-landing", {
    duration:2,
    opacity:0,
    delay:4,
});
tl.from("#navbar", {
    duration:2,
    opacity:0
}, "-=2");

// SCROLL-ANIMATIONS
// defaults
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    start: "top center",
    end: "center center",
    toggleActions: "restart reverse restart reverse",
    scrub: true,
});
// index-intro
gsap.to("#i-intro", {
    scrollTrigger: "#i-intro",
    duration:2,
    opacity:1,
});
gsap.to("#iig-item-a", {
    scrollTrigger: "#i-intro",
    duration:2,
    y:0,
});
gsap.to("#iig-item-b", {
    scrollTrigger: "#i-intro",
    duration:2,
    y:0,
});
gsap.to("#iig-item-c", {
    scrollTrigger: "#i-intro",
    duration:2,
    y:0,
});
gsap.to("#iig-text", {
    scrollTrigger: "#i-intro",
    duration:2,
    x:0
});
// index-feature
gsap.to("#i-feature", {
    scrollTrigger: "#i-feature",
    duration:2,
    opacity:1,
});
gsap.to("#fe", {
    scrollTrigger: "#i-feature",
    duration:2,
    y:0
});
gsap.to(".carousel-item img", {
    scrollTrigger: "#i-feature",
    duration:2,
    x:0
});
// index-socmed
gsap.to("#is-telephone", {
    scrollTrigger: "#i-socmed",
    duration:2,
    delay: 0.1,
    opacity:1,
});
gsap.to("#is-facebook", {
    scrollTrigger: "#i-socmed",
    duration:2,
    opacity:1,
});
gsap.to("#is-instagram", {
    scrollTrigger: "#i-socmed",
    duration:2,
    opacity:1,
});
gsap.to("#is-mail", {
    scrollTrigger: "#i-socmed",
    duration:2,
    opacity:1,
});