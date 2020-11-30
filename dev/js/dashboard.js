import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();

export function dashboardAnimation(){ 

    dashboardTL.from("#Stroke-9",{duration:0, drawSVG: "0%", ease:"none"}, "load-sight")


          

    return dashboardTL}