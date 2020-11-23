import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

import { logoAnimation } from "./logo.js";
import { scannerAnimation } from "./face-scan.js";
import { dashboardAnimation } from "./dashboard.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline()
mainTL.add(logoAnimation())
mainTL.add(scannerAnimation())
mainTL.add(dashboardAnimation())

GSDevTools.create();