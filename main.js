// show mwnu bar
let showMenubar = () => {
    document.getElementById("sideMenuBar").style.width = "100%";
}
// hide menubar
let hideMenuBar = () => {
    document.getElementById("sideMenuBar").style.width = "0px";
}

//change of color of links on scroll
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

//change of background of navbar on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        document.querySelector("nav").classList.add("navBg");
    } else {
        document.querySelector("nav").classList.remove("navBg");
    }
})

// toggle text using read more button
let toggleText = () => {
    document.getElementById("hiddenText").classList.toggle("hiddenText");
    let text = document.getElementById("readMoreBtn");
    text.innerText = (text.innerText === "Read More...") ? text.innerText = "Read Less" : "Read More...";
}
document.getElementById("readMoreBtn").onclick = toggleText;