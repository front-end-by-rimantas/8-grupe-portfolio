"use strict";

// services

var services = [
    {
        icon: 'paint-brush',
        title: 'Web design',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequatur nisi architecto, nam recusandae assumenda.'
    },
    {
        icon: 'mobile',
        title: 'Mobile apps',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequatur nisi architecto.'
    },
    {
        icon: 'code',
        title: 'Web development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam recusandae assumenda.'
    }
];

// portfolio

var portfolio = [
    {
        photo: 'illustration.jpg',
        title: 'Illustration work',
        tag: 'illustration'
    },
    {
        photo: 'photoshop.jpg',
        title: 'Photoshop work',
        tag: 'photoshop'
    },
    {
        photo: 'illustration1.jpg',
        title: 'Illustration work',
        tag: 'illustration'
    },
    {
        photo: 'photoshop1.jpg',
        title: 'Photoshop work',
        tag: 'photoshop'
    },
    {
        photo: 'website.jpg',
        title: 'Website work',
        tag: 'Website'
    },
    {
        photo: 'apps.jpg',
        title: 'Apps work',
        tag: 'App'
    }
];

// testimonials

var testimonials = [
    {
        photo: 'person1.jpg',
        text: 'The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact.',
        author: 'Mandy Doe',
        gender: 'male',
        position: 'Founder of Mandy'
    },
    {
        photo: 'person2.jpg',
        text: 'The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact.',
        author: 'John Doe',
        gender: 'male',
        position: 'Founder of Facebooook'
    },
    {
        photo: 'person3.jpg',
        text: 'The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact.',
        author: 'Cindy Doe',
        gender: 'female',
        position: 'Founder of Ggle'
    }
];

// blog

var blog = [
    {
        photo: 'blog3.jpg',
        heading: 'New Bog For Web Designer',
        date: '25th Oct 2017',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        link: '#'
    },
    {
        photo: 'blog2.jpg',
        heading: 'Latest Mobile Apps',
        date: '25th Oct 2017',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        link: '#'
    },
    {
        photo: 'blog1.jpg',
        heading: 'You Need Website For Your Business',
        date: '25th Oct 2017',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        link: '#'
    }
];

// contact me

var contactForm = {
    fields: [
        {
            type: 'input',
            attr: [
                {
                    name: 'type',
                    value: 'text'
                },
                {
                    name: 'value',
                    value: ''
                },
                {
                    name: 'placeholder',
                    value: 'Name'
                }
            ],
            className: ['col-6'],
            required: true
        },
        {
            type: 'input',
            attr: [
                {
                    name: 'type',
                    value: 'email'
                },
                {
                    name: 'value',
                    value: ''
                },
                {
                    name: 'placeholder',
                    value: 'Email'
                }
            ],
            className: ['col-6'],
            required: true
        },
        {
            type: 'input',
            attr: [
                {
                    name: 'type',
                    value: 'tel'
                },
                {
                    name: 'value',
                    value: ''
                },
                {
                    name: 'placeholder',
                    value: 'Phone'
                }
            ],
            className: ['col-6'],
            required: false
        },
        {
            type: 'input',
            attr: [
                {
                    name: 'type',
                    value: 'text'
                },
                {
                    name: 'value',
                    value: ''
                },
                {
                    name: 'placeholder',
                    value: 'Website'
                }
            ],
            className: ['col-6', 'pomidoras'],
            required: false
        },
        {
            type: 'textarea',
            attr: [
                {
                    name: 'placeholder',
                    value: 'Your message'
                }
            ],
            value: '',
            className: ['col-12'],
            required: true
        }
    ],
    actions: [
        {
            style: 'red',
            text: 'Send message'
        }
    ]
};

var contactInfo = [
    {
        icon: 'globe',
        title: 'Adress',
        info: [
            {
                type: 'text',
                value: '123 6th St. Melbourne, FL 32904, USA'
            }
        ]
    },
    {
        icon: 'globe',
        title: 'Email',
        info: [
            {
                type: 'link',
                value: 'example@yourdomain.com'
            },
            {
                type: 'link',
                value: 'info@yourdomain.com'
            }
        ]
    },
    {
        icon: 'globe',
        title: 'Phone',
        info: [
            {
                type: 'text',
                value: 'Mob: +01 000 000 000'
            },
            {
                type: 'text',
                value: 'Fax: +01 000 000 000'
            }
        ]
    }
];

// footer icons

var footerIcons = [
    {
        icon: 'facebook',
        link: '#'
    },
    {
        icon: 'twitter',
        link: '#'
    },
    {
        icon: 'linkedin',
        link: '#'
    },
    {
        icon: 'pinterest',
        link: '#'
    },
    {
        icon: 'instagram',
        link: '#'
    }
];