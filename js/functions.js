"use strict";

function generateIcons( data ) {
    var HTML = '';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].link === '' ) {
            continue;
        }
        HTML += '<a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a>';
    }

    return HTML;
}

// header

function elementHeight( path ) {
    var height = parseFloat(window.getComputedStyle( document.querySelector( path ) ).height);
    return height;
}

function headerScrollDetector() {
    var sections = [],
        scroll = window.scrollY + elementHeight('header'),
        links = document.querySelectorAll('header nav > a'),
        headerLinkCount = links.length,
        top = document.getElementById('resume').offsetTop,
        sectionID = '',
        activeSectionIndex = 0,
        clname = '';

    // searching for section index user is looking at
    for ( var i=0; i<headerLinkCount; i++ ) {
        sectionID = links[i].getAttribute('href');
        if ( sectionID === '#' ) {
            sections.push(0);
            continue;
        }
        top = document.querySelector(sectionID).offsetTop;
        sections.push(top);
        if ( top <= scroll ) {
            activeSectionIndex = i;
        } else {
            break;
        }
    }

    // remove class "active" from all links
    for ( var i=0; i<links.length; i++ ) {
        clname = ' ' + links[i].className + ' ';
        clname = clname.replace(" active ", " ");
        links[i].className = clname;
    }
    // add class "active" to particular link
    links[activeSectionIndex].className += ' active';
    
}

function headerStyle() {
    var scroll = window.scrollY,
        limit = 80,
        element = document.getElementById('header'),
        clname = '';
    if ( scroll > limit ) {
        clname = ' ' + element.className + ' ';
        clname = clname.replace(" transparent ", " ");
        element.className = clname;
    } else {
        element.className += ' transparent';
    }
}

// about me

// services

function generateServices( data ) {
    var HTML = '';

    for ( var i=0; i<data.length; i++ ) {
        HTML += '<div class="service">\
                    <i class="fa fa-'+data[i].icon+'"></i>\
                    <h3>'+data[i].title+'</h3>\
                    <p>'+data[i].description+'</p>\
                </div>';
    }

    return HTML;
}

// resume

// portfolio

// testimonials

// blogs

function generateBlog( data ) {
    var HTML = '';

    for ( var i=0; i<data.length; i++ ) {
        HTML += '<div class="blog">\
                    <div class="img" style="background-image: url(img/blog/'+data[i].photo+');"></div>\
                    <h3>'+data[i].heading+'</h3>\
                    <p>Posted on '+data[i].date+'</p>\
                    <p>'+data[i].description+' ...</p>\
                    <a href="'+data[i].link+'" class="btn">Read more</a>\
                </div>';
    }

    return HTML;
}

// contact me

// footer