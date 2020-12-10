import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

import { logoAnimation } from "./logo.js";
import { scannerAnimation } from "./face-scan.js";

import { dashboardAnimation } from "./dashboard.js";
import { tiefighterAnimation } from "./repair.js";
import { movingdashAnimation } from "./movingdash.js";


gsap.registerPlugin(GSDevTools);

//tiefighterAnimation();

const mainTL = gsap.timeline()
mainTL.add(logoAnimation())
mainTL.add(scannerAnimation())

mainTL.add(dashboardAnimation())
mainTL.add(tiefighterAnimation())
mainTL.add(movingdashAnimation())


GSDevTools.create();