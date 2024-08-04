const navbarLinks = document.querySelectorAll('.topnav a');

navbarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({ behavior: 'smooth' });
    });
});

console.log("");