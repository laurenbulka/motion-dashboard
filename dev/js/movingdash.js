import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const movingdashTL = gsap.timeline();


export function movingdashAnimation(){ 

    //WARNING ANIMATION
    movingdashTL.from("#warning",{duration:.4, alpha:0})
    movingdashTL.from("#warning",{duration:.4, alpha:1})
    movingdashTL.from("#warning",{duration:.4, alpha:0})
    movingdashTL.from("#warning",{duration:.4, alpha:1})
    movingdashTL.from("#warning",{duration:.4, alpha:0})
    movingdashTL.from("#warning",{duration:.4, alpha:1})
    movingdashTL.from("#warning",{duration:.4, alpha:0})
    

    //TIE FIGHTER





    //ERROR POP UP
    movingdashTL.from("#right-brain-red",{duration:.1, alpha:0},"flash")
    movingdashTL.to("#right-brain",{duration:.4, alpha:0})
    movingdashTL.to("#right-brain",{duration:.4, alpha:1})
    movingdashTL.to("#right-brain",{duration:.4, alpha:0})
    movingdashTL.to("#right-brain",{duration:.4, alpha:1})
    movingdashTL.to("#right-brain",{duration:.4, alpha:0})
    movingdashTL.to("#right-brain",{duration:.4, alpha:1})
    movingdashTL.to("#right-brain",{duration:.4, alpha:0})
    movingdashTL.to("#right-brain",{duration:.4, alpha:1},"fuel")
    movingdashTL.to("#right-brain",{duration:.4, alpha:0},"gauge")
    movingdashTL.from("#repair-gauge",{duration:4, delay:1.4, drawSVG: "0%"},"gauge")
    movingdashTL.to("#right-brain",{duration:.4, alpha:1})

    //FUEL GAUGE
    movingdashTL.to("#fuel-right-fill",{duration:4, drawSVG: "91%"}, "gauge")
    movingdashTL.to("#fuel-left-fill",{duration:4, drawSVG: "92%"}, "gauge")
    
    //REPAIRING TEXT
    movingdashTL.from("#repair-line",{duration:1, drawSVG: "0%"},"fuel")
    movingdashTL.from("#r",{duration:.1, alpha:0, delay:0}, "gauge")
    movingdashTL.from("#e",{duration:.1, alpha:0, delay:.1}, "gauge")
    movingdashTL.from("#p",{duration:.1, alpha:0, delay:.2}, "gauge")
    movingdashTL.from("#a",{duration:.1, alpha:0, delay:.3}, "gauge")
    movingdashTL.from("#i",{duration:.1, alpha:0, delay:.4}, "gauge")
    movingdashTL.from("#r2",{duration:.1, alpha:0, delay:.5}, "gauge")
    movingdashTL.from("#i2",{duration:.1, alpha:0, delay:.6}, "gauge")
    movingdashTL.from("#n",{duration:.1, alpha:0, delay:.7}, "gauge")
    movingdashTL.from("#g",{duration:.1, alpha:0, delay:.8}, "gauge")
    movingdashTL.from("#dot1",{duration:.1, alpha:0, delay:.9}, "gauge")
    movingdashTL.from("#dot2",{duration:.1, alpha:0, delay:1}, "gauge")
    movingdashTL.from("#dot3",{duration:.1, alpha:0, delay:1.1}, "gauge")
    movingdashTL.from("#percent",{duration:.1, alpha:0, delay:1.2}, "gauge")


    //COUNTER LOOPHOLE
    movingdashTL.from("#alert-14",{duration:.2, alpha:0, delay:2}, "gauge")
    movingdashTL.from("#alert-14",{duration:.2, alpha:1, delay:2.2}, "gauge")
  
    movingdashTL.from("#alert-23",{duration:.2, alpha:0, delay:2.2}, "gauge")
    movingdashTL.from("#alert-23",{duration:.2, alpha:1, delay:2.4}, "gauge")
  
    movingdashTL.from("#alert-28",{duration:.2, alpha:0, delay:2.4}, "gauge")
    movingdashTL.from("#alert-28",{duration:.2, alpha:1, delay:2.6}, "gauge")
  
    movingdashTL.from("#alert-37",{duration:.2, alpha:0, delay:2.6}, "gauge")
    movingdashTL.from("#alert-37",{duration:.2, alpha:1, delay:2.8}, "gauge")
  
    movingdashTL.from("#alert-43",{duration:.2, alpha:0, delay:2.8}, "gauge")
    movingdashTL.from("#alert-43",{duration:.2, alpha:1, delay:3.0}, "gauge")
  
    movingdashTL.from("#alert-56",{duration:.2, alpha:0, delay:3.0}, "gauge")
    movingdashTL.from("#alert-56",{duration:.2, alpha:1, delay:3.2}, "gauge")
    
    movingdashTL.from("#alert-68",{duration:.2, alpha:0, delay:3.2}, "gauge")
    movingdashTL.from("#alert-68",{duration:.2, alpha:1, delay:3.4}, "gauge")
   
    movingdashTL.from("#alert-71",{duration:.2, alpha:0, delay:3.4}, "gauge")
    movingdashTL.from("#alert-71",{duration:.2, alpha:1, delay:3.6}, "gauge")
   
    movingdashTL.from("#alert-77",{duration:.2, alpha:0, delay:3.6}, "gauge")
    movingdashTL.from("#alert-77",{duration:.2, alpha:1, delay:3.8}, "gauge")
    
    movingdashTL.from("#alert-82",{duration:.2, alpha:0, delay:3.8}, "gauge")
    movingdashTL.from("#alert-82",{duration:.2, alpha:1, delay:4.0}, "gauge")
    
    movingdashTL.from("#alert-91",{duration:.2, alpha:0, delay:4.0}, "gauge")
    movingdashTL.from("#alert-91",{duration:.2, alpha:1, delay:4.2}, "gauge")
    
    movingdashTL.from("#alert-97",{duration:.2, alpha:0, delay:4.2}, "gauge")
    movingdashTL.from("#alert-97",{duration:.2, alpha:1, delay:4.4}, "gauge")
    
    movingdashTL.from("#alert-98",{duration:.2, alpha:0, delay:4.4}, "gauge")
    movingdashTL.from("#alert-98",{duration:.2, alpha:1, delay:4.6}, "gauge")
    
    movingdashTL.from("#alert-99",{duration:.2, alpha:0, delay:4.6}, "gauge")
    movingdashTL.from("#alert-99",{duration:.2, alpha:1, delay:4.8}, "gauge")
    
    movingdashTL.from("#alert-100",{duration:.2, alpha:0, delay:4.8}, "gauge")


    return movingdashTL}