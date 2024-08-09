// gsap.to(".box", {
//     x:'300px',
//     // y:300, //default 300px it takes
//     delay:1,
//     duration:2,
//     // rotate:360,
//     // backgroundColor:"blue",
    
// })

let tl1 = gsap.timeline()

tl1.to("#box1", {
    x:500,
    duration:3,
    rotate:360,
    scale: 0.5
})
tl1.to("#box2", {
    x:500,
    duration:3,
    rotate:360,
    scale: 0.5
})
tl1.to("#box3", {
    x:500,
    duration:3,
    rotate:360,
    scale: 0.5
})