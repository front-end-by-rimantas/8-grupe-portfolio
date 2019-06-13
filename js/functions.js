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

function elementHeight( path ) {
    var height = parseFloat(window.getComputedStyle( document.querySelector( path ) ).height);
    return height;
}

function headerScrollDetector() {
    var sections = [],
        scroll = window.scrollY + elementHeight('header'),
        headerLinkCount = document.querySelectorAll('header nav > a').length,
        top = document.getElementById('resume').offsetTop,
        sectionID = '';

    for ( var i=0; i<headerLinkCount; i++ ) {
        sectionID = document.querySelectorAll('header nav > a')[i].getAttribute('href');
        if ( sectionID === '#' ) {
            sections.push(0);
            continue;
        }
        top = document.querySelector(sectionID).offsetTop;
        sections.push(top);
    }

    console.log( sections );
    console.log( scroll );
    
    
}
