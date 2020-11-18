import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const drawTL = gsap.timeline();

export function drawAnimation(){

    //drawTL.from("#rebel-logo",{duration:3, drawSVG: "0%", ease:"none"});

    drawTL.fromTo("#rebel-logo",{drawSVG:"0% 10%"},{duration:2, drawSVG: "90% 100%", ease:"none"})
          .to("#rebel-logo",{duration:2, drawSVG: "100%"});
          drawTL.to("#rebel-logo", {duration:1, scale: .4, x:120, y:-100})

    return drawTL}