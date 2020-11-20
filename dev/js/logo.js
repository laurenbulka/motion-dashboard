import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const logoTL = gsap.timeline();

export function logoAnimation(){ 

    //logoTL.from("#rebel-logo",{duration:3, drawSVG: "0%", ease:"none"});

    logoTL.fromTo("#rebel-logo",{drawSVG:"0% 10%"},{duration:2, drawSVG: "90% 100%", ease:"none"})
          .to("#rebel-logo",{duration:2, drawSVG: "100%"});
      logoTL.from("#rebel-logo-fill", {duration:1, alpha:0})   
      logoTL.to("#logo-reveal", {duration:1, scale: .35, x:133, y:-100})

          

    return logoTL}