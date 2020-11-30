import { gsap } from "gsap";

const scannerTL = gsap.timeline();

export function scannerAnimation(){ 

    //logoTL.from("#rebel-logo",{duration:3, drawSVG: "0%", ease:"none"});

    scannerTL.from("#Line", {duration:1, alpha:0})
    scannerTL.to("#Line", {duration:2, y:500, ease:"none"}, "scan")
    scannerTL.to("#clip-path", {duration:2, y:500, ease:"none"}, "scan")
    scannerTL.to("#Line", {duration:.5, alpha:0}, "fade")
    
    
    scannerTL.from("#Fill-1",{duration:.05, alpha:0})
    scannerTL.from("#Fill-2",{duration:.05, alpha:0})
    scannerTL.from("#Fill-3",{duration:.05, alpha:0})
    scannerTL.from("#Fill-4",{duration:.05, alpha:0})
    scannerTL.from("#Fill-5",{duration:.05, alpha:0})
    scannerTL.from("#Fill-6",{duration:.05, alpha:0})
    scannerTL.from("#Fill-7",{duration:.05, alpha:0})
    scannerTL.from("#Fill-8",{duration:.05, alpha:0})
    scannerTL.from("#Fill-9",{duration:.05, alpha:0})
    scannerTL.from("#Fill-10",{duration:.05, alpha:0})
    scannerTL.from("#Fill-11",{duration:.05, alpha:0})
    scannerTL.from("#Fill-12",{duration:.05, alpha:0})
    scannerTL.from("#Fill-13",{duration:.05, alpha:0})
    scannerTL.from("#Fill-14",{duration:.05, alpha:0})
    scannerTL.from("#Fill-15",{duration:.05, alpha:0})
    scannerTL.from("#Fill-16",{duration:.05, alpha:0})
    scannerTL.from("#c3po-green", {duration:1, alpha:0}, "green")
    scannerTL.from("#access-green", {duration:1, alpha:0}, "green")

    scannerTL.to("#c3po-green", {duration:1, alpha:0}, "end")
    scannerTL.to("#access-green", {duration:1, alpha:0}, "end")
    scannerTL.to("#c3po", {duration:1, alpha:0}, "end")
    scannerTL.to("#access", {duration:1, alpha:0}, "end")
    scannerTL.to("#clip-path", {duration:1, alpha:0}, "end")

    return scannerTL}