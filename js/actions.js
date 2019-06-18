"use strict";

// general
window.addEventListener("scroll", function(){
    headerScrollDetector();
    headerStyle();
});

// services
document.getElementById('services_list').innerHTML = generateServices( services );

// footer
document.getElementById('footer_icons').innerHTML = generateIcons( footerIcons );
