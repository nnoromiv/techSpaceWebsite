const BLOGURL = 'https://techspace-backend.onrender.com/blog/'

const HEADERS = new Headers({
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json; charset=utf-8',
});

const SECONDARYNAVBARMENU = [
    {
        href: '/',
        link: 'Home'
    },
    {
        href: '/tech-store',
        link: 'Tech store'
    },
    {
        href: '/ai-data-science',
        link: 'AI/Data Science'
    },
    {
        href: '/backend',
        link: 'Backend Development'
    },
    {
        href: '/cybersecurity',
        link: 'Cybersecurity'
    },
    {
        href: '/frontend',
        link: 'Frontend Development'
    },
    {
        href: '/UIUX',
        link: 'UI/UX Development'
    },
    {
        href: '/blogs',
        link: 'Blogs'
    },
    {
        href: '/events',
        link: 'Events'
    },
    {
        href: '/gallery',
        link: 'Gallery'
    },
    {
        href: '/about-us',
        link: 'About us'
    },
    {
        href: '#FAQ',
        link: 'FAQ'
    },
    {
        href: '#about-stacks',
        link: 'About Stacks'
    },
    {
        href: '#contact',
        link: 'Contact'
    },
]

export {BLOGURL, HEADERS, SECONDARYNAVBARMENU}
