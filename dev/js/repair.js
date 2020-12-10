


import { gsap } from "gsap";

const tiefighterTL = gsap.timeline();
export function tiefighterAnimation() {


    tiefighterTL.from("#tie-fighter",{duration:.1, alpha:0}, "t-1")
    tiefighterTL.to("#tie-fighter",{duration:.7, rotate:20, x:137, y:100},"t-2")
    tiefighterTL.to("#tie-fighter",{duration:.8, rotate:60, x:86, y:60},"t-3")
    tiefighterTL.to("#tie-fighter",{duration:.8, rotate:-12, x:177, y:300},"t-4")
    tiefighterTL.to("#tie-fighter",{duration:.9, rotate:80, x:30, y:80},"t-5")
    tiefighterTL.to("#tie-fighter",{duration:1, rotate:0, x:102, y:182},"t-6")
    tiefighterTL.from("#tie-fighter-green",{duration:.6, alpha:0},"center")

  
    tiefighterTL.to("#sight",{duration:.7, x:300, y:400},"t-2")
    tiefighterTL.to("#sight",{duration:.8, x:270, y:300},"t-3")
    tiefighterTL.to("#sight",{duration:.8,  x:350, y:530},"t-4")
    tiefighterTL.to("#sight",{duration:.9, x:200, y:380},"t-5")
    tiefighterTL.to("#sight",{duration:1, x:245, y:351},"t-6")


    tiefighterTL.from("#sight-red",{duration:1, alpha:0},"center")

    //WARNING ANIMATION
    tiefighterTL.from("#warning",{duration:.4, alpha:0})
    tiefighterTL.from("#warning",{duration:.4, alpha:1})
    tiefighterTL.from("#warning",{duration:.4, alpha:0})
    tiefighterTL.from("#warning",{duration:.4, alpha:1})
    tiefighterTL.from("#warning",{duration:.4, alpha:0},"fade")
    tiefighterTL.from("#warning",{duration:.4, alpha:1})
    tiefighterTL.from("#warning",{duration:.4, alpha:0})


    tiefighterTL.to("#tie-fighter-green",{duration:.2, alpha:0})
    tiefighterTL.to("#tie-fighter",{duration:2, rotate:250, x:450, y:507},"fall")
    tiefighterTL.from("#sight-red",{duration:1, alpha:1},"fall")

    tiefighterTL.from("#warning",{duration:.4, alpha:1},"fall")

  


return tiefighterTL}