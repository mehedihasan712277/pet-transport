// show mwnu bar
let showMenubar = () => {
  document.getElementById("sideMenuBar").style.width = "100%";
};
// hide menubar
let hideMenuBar = () => {
  document.getElementById("sideMenuBar").style.width = "0px";
};

//change of color of links on scroll
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll("nav .menuLink li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let id = sec.getAttribute("id");
    let offset = sec.offsetTop - 136;
    let height = sec.offsetHeight;
    let top = window.scrollY;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav .menuLink li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

//change of background of navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 100) {
    document.querySelector("nav").classList.add("navBg");
  } else {
    document.querySelector("nav").classList.remove("navBg");
  }
});

// toggle text using read more button
// let toggleText = () => {
//   document.getElementById("hiddenText").classList.toggle("hiddenText");
//   let text = document.getElementById("readMoreBtn");
//   text.innerText =
//     text.innerText === "Read More..."
//       ? (text.innerText = "Read Less")
//       : "Read More...";
// };
// document.getElementById("readMoreBtn").onclick = toggleText;

// console.log("cookie: ", cookieValue);

// function setCookie(value) {
//   const cookieValue = document.cookie
//     .split('=')[1]
//   let cookieString = `product_ids=${value}|${cookieValue}`;

//   document.cookie = cookieString;
// }

// function setCookie(value) {
//   let cookieValue = document.cookie.split('=')[1] || ''; // Initialize to an empty string if cookie doesn't exist yet
//   cookieValue = cookieValue.replace(/\|undefined/g, ''); // Remove any "|undefined" substring
//   const cookieString = `product_ids=${value}|${cookieValue}`;

//   document.cookie = cookieString;
// }


function setCookie(value) {
  let cookieValue = document.cookie.split('=')[1] || ''; // Initialize to an empty string if cookie doesn't exist yet
  cookieValue = cookieValue.replace(/\|undefined/g, ''); // Remove any "|undefined" substring

  const expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1); // Set expiration date to one month from now
  const expires = expirationDate.toUTCString();

  const cookieString = `product_ids=${value}|${cookieValue}; expires=${expires}; path=/`;

  document.cookie = cookieString;
}



