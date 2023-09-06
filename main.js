// show mwnu bar
let showMenubar = () => {
    document.getElementById("sideMenuBar").style.width = "100%";
}
// hide menubar
let hideMenuBar = () => {
    document.getElementById("sideMenuBar").style.width = "0px";
}

//change style on scroll
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('nav .menuLink li a');


window.onscroll = () => {
    sections.forEach(sec => {
        let id = sec.getAttribute('id');
        let offset = sec.offsetTop - 136;
        let height = sec.offsetHeight;
        let top = window.scrollY;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('nav .menuLink li a[href*=' + id + ']').classList.add("active");
            })
        }
    });
}