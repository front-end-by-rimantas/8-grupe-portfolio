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

// about me lightbox
document.querySelector('#about h2').addEventListener('click', showLightbox);
document.querySelector('.lightbox > .background').addEventListener('click', hideLightbox);

function showLightbox( event ) {
    document.querySelector('.lightbox').classList.add('active');
    let video = event.target.getAttribute('data-youtube');
    document.querySelector('.lightbox .content').innerHTML = `<iframe src="https://www.youtube.com/embed/${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function hideLightbox() {
    document.querySelector('.lightbox').classList.remove('active');
    document.querySelector('.lightbox .content').innerHTML = '';
}