import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();

export function dashboardAnimation(){ 

    //dashboardTL.from("#droid-brains",{duration:1, drawSVG: "0%", ease:"none"})
    dashboardTL.from("#inner1",{duration:1, drawSVG: "0%"}, "beginning")
    dashboardTL.from("#inner2",{duration:1, drawSVG: "0%"}, "beginning")
    dashboardTL.from("#fuel-left",{duration:1, drawSVG: "0%"}, "beginning")
    dashboardTL.from("#fuel-right",{duration:1, drawSVG: "0%"}, "beginning")
    dashboardTL.from("#radio-outline",{duration:1, drawSVG: "0%"}, "beginning")
    dashboardTL.from("#dial-fill",{duration:1, drawSVG: "0%"}, "beginning")
    dashboardTL.from("#outer-dial",{duration:1, drawSVG: "0%"}, "beginning")
    dashboardTL.from("#innerfill",{duration:1, alpha:0}, "beginning")  
    dashboardTL.from("#dial-fill",{duration:1, alpha:0}, "beginning") 
    //dashboardTL.from("#gauge",{duration:1, drawSVG: "0% 60%"}, "beginning")
   

    dashboardTL.from("#outer1",{duration:1, drawSVG: "0%"}, "next")     
    dashboardTL.from("#outer2",{duration:1, drawSVG: "0%"}, "next") 
    
   
   
    dashboardTL.from("#tl",{duration:.5, drawSVG: "0%"}, "droids")
    dashboardTL.from("#bl",{duration:.5, drawSVG: "0%"}, "droids")
    dashboardTL.from("#tr",{duration:.5, drawSVG: "0%"}, "droids")
    dashboardTL.from("#br",{duration:.5, drawSVG: "0%"}, "droids")
    dashboardTL.from(".brain-path",{duration:1, drawSVG: "0%"}, "droids")
    dashboardTL.from(".rasio-lines",{duration:1, drawSVG: "0%"}, "droids")
  
    //dashboardTL.from("#droid-brains",{duration:.5, alpha:0}, "droids")
    //dashboardTL.from("#right-brain",{duration:.5, alpha:0}, "droids")

 

    dashboardTL.from("#s1",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s2",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s3",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s4",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s5",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s6",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s7",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s8",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s9",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s10",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s11",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s12",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s13",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s14",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s15",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s16",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s17",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s18",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s19",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s20",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s21",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s22",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s23",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s24",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s25",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s26",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s27",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s28",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s29",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s30",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s31",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s32",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s33",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s34",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s35",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s36",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s37",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s38",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s39",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s40",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s41",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s42",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s43",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s44",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s45",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s46",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s47",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s48",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s49",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s50",{duration:0.02, drawSVG: "0%"})
   
    dashboardTL.from("#s60",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s61",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s62",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s63",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s64",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s65",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s66",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s67",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s68",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s69",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s70",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s71",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s72",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s73",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s74",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s75",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s76",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s77",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s78",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s79",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s80",{duration:0.02, drawSVG: "0%"})
    dashboardTL.from("#s81",{duration:0.02, drawSVG: "0%"})

  

    dashboardTL.from("#system-text",{duration:.5, alpha:0}, "text")
    dashboardTL.from("#fuel-label",{duration:.5, alpha:0}, "text")

    dashboardTL.from("#Group-2",{duration:.5, alpha:0})  
    dashboardTL.from("#dial-m",{duration:.1, alpha:0})
    dashboardTL.from("#dial-p",{duration:.1, alpha:0})
    dashboardTL.from("#dial-h",{duration:.1, alpha:0})
    
    dashboardTL.from(".sight-draw",{duration:1, drawSVG: "0%"}, "sight-load")
    //dashboardTL.from("#sight",{duration:.5, drawSVG: "0%"}, "sight-load")
    dashboardTL.from("#fuel-right-fill",{duration:.75, drawSVG: "0%"}, "sight-load")
    dashboardTL.from("#fuel-left-fill",{duration:.75, drawSVG: "0%"}, "sight-load")
    dashboardTL.fromTo("#gauge",{drawSVG:"0%"},{duration:.5, drawSVG: "77%", transformOrigin: "50% 50%", ease:"none"},"sight-load")
    


    return dashboardTL}