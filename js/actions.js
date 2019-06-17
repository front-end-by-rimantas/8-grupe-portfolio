"use strict";

// general
window.addEventListener("scroll", function(){
    headerScrollDetector();
    headerStyle();
});

// footer
document.getElementById('footer_icons').innerHTML = generateIcons( footerIcons );
