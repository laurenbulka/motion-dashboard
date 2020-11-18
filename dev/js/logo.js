import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export function drawAnimation(){

    drawTL.from("#rebel-logo",{duration:2, drawSVG: "0%", ease:"none"});

    //drawTL.to("rebel-logo",{duration:2, drawSVG:"0%"});

    //drawTL.to("#rebel-logo",{duration:2, drawSVG:"20% 60%"});

    //drawTL.to("#rebel-logo",{duration:2, drawSVG:0});

    //drawTL.to("#rebel-logo",{duration:2, drawSVG:"40% 30%"});

    //drawTL.to("#rebel-logo",{duration:2, drawSVG:"-10% -90%"});

    //drawTL.from("#rebel-logo",{duration:2, drawSVG:"50% 50%"});

    //drawTL.from("#rebel-logo",{duration:2, drawSVG:"10% 50%"});

    //drawTL.fromTo("#rebel-logo",{drawSVG:"0% 10%"},{duration:2, drawSVG: "90% 100%"})
         // .to("#rebel-logo",{duration:2, drawSVG: "100%"});

    return drawTL}