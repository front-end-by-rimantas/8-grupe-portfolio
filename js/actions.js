"use strict";

// general
window.addEventListener("scroll", function(){
    headerScrollDetector();
    headerStyle();
});

// services
document.getElementById('services_list').innerHTML = generateServices( services );

// blog
document.getElementById('blog_list').innerHTML = generateBlog( blog );

// contact-me
document.querySelector('#contact .form').innerHTML = generateForm( contactForm );
document.querySelector('#contact .contact-info').innerHTML = generateContactInfo( contactInfo );

// footer
document.getElementById('footer_icons').innerHTML = generateIcons( footerIcons );
