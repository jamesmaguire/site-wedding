function initPage() {

    const navbar = document.getElementById('table-of-contents');
    const title = document.getElementsByTagName('h2')[1].innerText;
    const tocheading = navbar.getElementsByTagName('h2')[0];

    // Rename TOC header and link to top
    tocheading.innerText = title;
    tocheading.addEventListener("click", function() {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
        console.log('scroll');
    });
    // Remove TOC Alex and James title
    navbar.getElementsByTagName('ul')[0].getElementsByTagName('a')[0].remove();

    // Remove TOC first heading and use as top button
    const firstheading = navbar.getElementsByTagName('ul')[0].getElementsByTagName('a')[0];
    firstheading.remove();

}
