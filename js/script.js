gsap.registerPlugin(CSSRulePlugin);
// mm=gsap.matchMedia();
const t1=gsap.timeline();
var logo_after = CSSRulePlugin.getRule(".logo::after");
var logo_before = CSSRulePlugin.getRule(".logo::before");
TweenMax.to(logo_after, {duration: 1,delay:0.7,opacity:1,display:"block"});
TweenMax.to(logo_before, {duration: 1,delay:0.7,opacity:1,display:"block"});
TweenMax.to('.logo',{duration:1,delay:0.3,scale:1.75})
TweenMax.to('.logo',{duration:3,top:"10%",delay:3.6,scale:1.25,ease:"power4.out"})
TweenMax.to(logo_after, {duration: 0.5,delay:3,opacity:0});
TweenMax.to(logo_before, {duration: 0.5,delay:3,opacity:0});
TweenMax.to(logo_before, {delay:3.5,display:"none"});
TweenMax.to(logo_after, {delay:3.5,display:"none"});
TweenMax.from(".wrapper",{y:"100vh",opacity:0,duration:1,delay:4.6})