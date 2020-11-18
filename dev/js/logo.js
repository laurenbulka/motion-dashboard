import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const drawTL = gsap.timeline();

export function drawAnimation(){

    //drawTL.from("#rebel-logo",{duration:3, drawSVG: "0%", ease:"none"});

    drawTL.fromTo("#rebel-logo",{drawSVG:"0% 10%"},{duration:3.5, drawSVG: "90% 100%"})
          .to("#rebel-logo",{duration:2, drawSVG: "100%"});

    return drawTL}