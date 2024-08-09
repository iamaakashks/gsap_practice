let tl = gsap.timeline();
tl.from("h3", {
    y:-20,
    duration:0.4,
    opacity:0,
    stagger:0.2
})

tl.from("#main>h1", {
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.3
})