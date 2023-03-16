setTimeout(() => {
    document.querySelector(".t2 .typed-cursor").style.cssText="opacity:0";
}, 2000);
var typed = new Typed('.typed1', {
    strings: [
        '',
        'We\'ve got something <br><span class="text-unfold">special</span> for you.',
    ],
    startDelay: 5600,
    typeSpeed: 70,
});
setTimeout(() => {
    document.querySelector(".t1 .typed-cursor").style.cssText="display:none";
    document.querySelector(".t2 .typed-cursor").style.cssText="opacity:1";
}, 10999);
var typed = new Typed('.typed2', {
    strings: [
        '',
        'And we can\'t wait for you to see it.<br>Please check back soon.',
    ],
    startDelay: 11000,
    typeSpeed: 70,
});
setTimeout(() => {
    document.querySelector(".t2 .typed-cursor").style.cssText="opacity:0";
}, 17100);
setTimeout(() => {
    document.querySelector(".text-unfold").style.cssText="color:rgba(228, 255, 103, 1);"
}, 18000);
