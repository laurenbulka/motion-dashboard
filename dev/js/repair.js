


import { gsap } from "gsap";

const tiefighterTL = gsap.timeline();
export function tiefighterAnimation() {


    tiefighterTL.from("#tie-fighter",{duration:.1, alpha:0})
    tiefighterTL.to("#tie-fighter",{duration:.7, rotate:20, x:137, y:100})
    tiefighterTL.to("#tie-fighter",{duration:.7, rotate:47, x:86, y:60})
    tiefighterTL.to("#tie-fighter",{duration:.7, rotate:-12, x:177, y:300})
    tiefighterTL.to("#tie-fighter",{duration:.7, rotate:51, x:30, y:80})
    tiefighterTL.to("#tie-fighter",{duration:.7, rotate:0, x:102, y:182})
    tiefighterTL.from("#tie-fighter-green",{duration:.6, alpha:0})


    //WARNING ANIMATION
    tiefighterTL.from("#warning",{duration:.4, alpha:0})
    tiefighterTL.from("#warning",{duration:.4, alpha:1})
    tiefighterTL.from("#warning",{duration:.4, alpha:0})
    tiefighterTL.from("#warning",{duration:.4, alpha:1})
    tiefighterTL.from("#warning",{duration:.4, alpha:0})
    tiefighterTL.from("#warning",{duration:.4, alpha:1})
    tiefighterTL.from("#warning",{duration:.4, alpha:0})
    
    tiefighterTL.to("#tie-fighter-green",{duration:.2, alpha:0})
    tiefighterTL.to("#tie-fighter",{duration:2, rotate:190, x:500, y:527})

return tiefighterTL}