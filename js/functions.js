"use strict";

/**
 * Generating links to social media profiles using links and icons
 * @param {array} data - Array of objects
 * @returns {string} HTML
 */
function generateIcons( data ) {
    var HTML = '';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].link === '' ) {
            continue;
        }
        HTML += `<a href="${data[i].link}" target="_blank" class="fa fa-${data[i].icon}"></a>`;
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

        // HTML += `<div class="service">
        //             <i class="fa fa-${data[i].icon}"></i>
        //             <h3>${data[i].title}</h3>
        //             <p>${data[i].description}</p>
        //         </div>`;
    }

    return HTML;
}

// resume

// portfolio

function generatePortfolio( data ) {
    var tags = [],
        HTML = `<div class="filter">
                    <div class="active">All</div>`;

    // is darbu issirenkame tik tag'us
    data.forEach( work => {
        if ( tags.indexOf( work.tag ) === -1 ) {
            tags.push( work.tag );
            HTML += `<div>${work.tag}</div>`;
        }
    });

    HTML += `</div>
            <div class="list">`;

    data.forEach( (work) => {
        HTML += `<div class="portfolio">
                    <div class="absolute">
                        <div class="photo" style="background-image: url(img/portfolio/${work.photo});"></div>
                        <div class="black">
                            <h4>${work.title}</h4>
                            <span>${work.tag}</span>
                        </div>
                    </div>
                </div>`;
    });
    HTML += `</div>`;
    

    return HTML;
}

function filterPortfolio( e ) {
    var tag = e.target.innerText.toLowerCase();

    if ( tag === 'all' ) {
        document.querySelectorAll('#portfolio_list .portfolio').forEach( work => {
            work.style.display = 'inline-block';
        });
        return;
    }
    
    // paslepti visus darbus
    document.querySelectorAll('#portfolio_list .portfolio').forEach( work => {
        work.style.display = 'none';
    });

    // parodyti tik tuos kurie turi reikiama tag'a
    document.querySelectorAll('#portfolio_list .portfolio').forEach( work => {
        if ( tag === work.querySelector('span').innerText.toLowerCase() ) {
            work.style.display = 'inline-block';
        }
    });

    return;
}

// testimonials

function generateTestimonials( data ) {
    // data = [1, 2, 3]
    // data = [3, 1, 2, 3]
    data.unshift( data[ data.length-1 ] );
    // data = [3, 1, 2, 3, 1]
    data.push( data[1] );

    var HTML = `<div class="list" style="margin-left: -100%; width: ${data.length * 100}%;">`,
        title = '';

    for ( var i=0; i<data.length; i++ ) {
        title = '';
        switch ( data[i].gender ) {
            case 'male':
                title = 'Mr.';
                break;
            case 'female':
                title = 'Ms.';
                break;
            default:
                title = '(looks like human)';
                break;
        }
        HTML += `<div class="testimonial" style="width: ${100 / data.length}%;" data-index="${i}">
                    <img src="img/testimonials/${data[i].photo}">
                    <p>${data[i].text}</p>
                    <h4>- ${title} ${data[i].author}</h4>
                    <p>${data[i].position}</p>
                </div>`;
    }
    HTML += `</div>
            <div class="controls">
                <i class="btn btn-big fa fa-angle-left"></i>`;

    for ( var i=0; i<data.length - 2; i++ ) {
        HTML += `<div class="dot"></div>`;
    }
    
        HTML += `<i class="btn btn-big fa fa-angle-right"></i>
            </div>`;

    return HTML;
}

function showTestimonial( value ) {
    var direction = '',
        listElement = document.querySelector('#testimonials_list > .list'),
        current_index = parseInt( listElement.style.marginLeft ) / -100,
        next_index = 0;

    if ( value.target.className.indexOf('fa-angle-left') >= 0 ) {
        direction = -1;
    }
    if ( value.target.className.indexOf('fa-angle-right') >= 0 ) {
        direction = 1;
    }
    
    next_index = current_index + direction;

    if ( current_index === 0 && direction === -1 ) {
        next_index = testimonials.length - 1;
    }

    if ( current_index === (testimonials.length - 1) && direction === 1 ) {
        next_index = 0;
    }

    let steps = 200,
        stepsDone = 0;
    let animate = setInterval(function(){
        if ( stepsDone === steps ) {
            clearInterval( animate );
            if ( next_index === 0 ) {
                listElement.style.marginLeft = (testimonials.length - 2) * -100 + '%';
            }
            if ( next_index === testimonials.length - 1 ) {
                listElement.style.marginLeft = '-100%';
            }
        } else {
            stepsDone++;
            listElement.style.marginLeft = (current_index + (next_index-current_index) / steps * stepsDone) * -100 + '%';
        }
    }, 1500 / steps);
    
    return;
}

// blogs

function generateBlog( data ) {
    var HTML = '';

    for ( var i=0; i<data.length; i++ ) {
        HTML += `<div class="blog">
                    <div class="img" style="background-image: url(img/blog/${data[i].photo});"></div>
                    <h3>${data[i].heading}</h3>
                    <p>Posted on ${data[i].date}</p>
                    <p>${data[i].description} ...</p>
                    <a href="${data[i].link}" class="btn">Read more</a>
                </div>`;
    }

    return HTML;
}

// contact me

function generateForm( data ) {
    var HTML = '<form>',
        field,
        attrHTML = '',
        attrInfo,
        classNames = '';

    // konstruojame formos elementus
    for ( var i=0; i<data.fields.length; i++ ) {
        field = data.fields[i];
        attrHTML = '';
        classNames = '';

        // sulipiname visus elemento atributus i viena
        for ( var a=0; a<field.attr.length; a++ ) {
            attrInfo = field.attr[a];
            attrHTML += ` ${attrInfo.name}="${attrInfo.value}"`;
        }

        // sulipiname visas elemento klases
        classNames = field.className.join(' ');
        
        
        // konstruojame tik reikiamo tipo elementa
        if ( field.type === 'input' ) {
            HTML += `<div class="${classNames}">
                        <input ${attrHTML}>
                    </div>`;
        }
        if ( field.type === 'textarea' ) {
            HTML += `<div class="${classNames}">
                        <textarea ${attrHTML}></textarea>
                    </div>`;
        }
    }

    // konstruojame formos veiksmu elementus (aka mygtukai)
    HTML += '<div class="actions">';
        for ( var i=0; i<data.actions.length; i++ ) {
            HTML += `<div class="col-12">
                        <div class="btn btn-big btn-${data.actions[i].style}">${data.actions[i].text}</div>
                    </div>`;
        }
    HTML += '</div>';
    
    HTML += '</form>';

    return HTML;
}

function generateContactInfo( data ) {
    var HTML = '',
        infoListHTML = '',
        infoElement;

    for ( var i=0; i<data.length; i++ ) {
        infoListHTML = '';

        for ( var p=0; p<data[i].info.length; p++ ) {
            infoElement = data[i].info[p];

            if ( infoElement.type === 'text' ) {
                infoListHTML += `<p>${infoElement.value}</p>`;
            }

            if ( infoElement.type === 'link' ) {
                infoListHTML += `<a href="mailto:${infoElement.value}">${infoElement.value}</a>`;
            }
        }

        HTML += `<div class="info-box">
                    <i class="fa fa-${data[i].icon}"></i>
                    <h3>${data[i].title}:</h3>
                    <div>${infoListHTML}</div>
                </div>`;
    }

    return HTML;
}

// footer