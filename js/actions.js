"use strict";

// general
window.addEventListener("scroll", function(){
    headerScrollDetector();
    headerStyle();
});

// portfolio
document.getElementById('portfolio_list').innerHTML = generatePortfolio( portfolio );

document.querySelectorAll('#portfolio_list .filter > div').forEach( filter => {
    filter.addEventListener('click', filterPortfolio);
});

// services
document.getElementById('services_list').innerHTML = generateServices( services );

// testimonials
document.getElementById('testimonials_list').innerHTML = generateTestimonials( testimonials );
var testimonialsLeftArrow = document.querySelector('#testimonials_list .controls > .fa-angle-left'),
    testimonialsRightArrow = document.querySelector('#testimonials_list .controls > .fa-angle-right');

testimonialsLeftArrow.addEventListener( 'click', showTestimonial );
testimonialsRightArrow.addEventListener( 'click', showTestimonial );


// blog
document.getElementById('blog_list').innerHTML = generateBlog( blog );

// contact-me
document.querySelector('#contact .form').innerHTML = generateForm( contactForm );
document.querySelector('#contact .contact-info').innerHTML = generateContactInfo( contactInfo );

// footer
document.getElementById('footer_icons').innerHTML = generateIcons( footerIcons );
