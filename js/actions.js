"use strict";

// general
window.addEventListener("scroll", headerScrollDetector);

// footer
document.getElementById('footer_icons').innerHTML = generateIcons( footerIcons );