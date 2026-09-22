/* ==========================================
   THEME
========================================== */

const body = document.body;
const toggle = document.getElementById("themeToggle");

const savedTheme =
  localStorage.getItem("nirob-theme");

if(savedTheme === "light"){
  body.classList.add("light");
}

function updateTheme(){

  if(!toggle) return;

  if(body.classList.contains("light")){

    toggle.textContent = "☀️";
    toggle.setAttribute(
      "aria-label",
      "Switch to dark mode"
    );

  }else{

    toggle.textContent = "🌙";
    toggle.setAttribute(
      "aria-label",
      "Switch to light mode"
    );

  }
}

updateTheme();


if(toggle){

  toggle.addEventListener("click",()=>{

    body.classList.toggle("light");

    localStorage.setItem(
      "nirob-theme",
      body.classList.contains("light")
        ? "light"
        : "dark"
    );

    updateTheme();

  });

}


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn =
  document.getElementById("mobileMenuBtn");

const navLinks =
  document.querySelector(".nav-links");

if(menuBtn && navLinks){

  menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("mobile-open");

  });

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(
    entries=>{

      entries.forEach(entry=>{

        if(entry.isIntersecting){

          entry.target.classList.add("visible");

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold:.12
    }
  );

revealElements.forEach(
  element=>{
    observer.observe(element);
  }
);


/* ==========================================
   ACTIVE NAV LINK
========================================== */

const currentPage =
  window.location.pathname
    .split("/")
    .pop() || "index.html";

document
  .querySelectorAll(".nav-link")
  .forEach(link=>{

    const href =
      link.getAttribute("href");

    if(
      href === currentPage ||
      (
        currentPage === "" &&
        href === "index.html"
      )
    ){

      link.classList.add("active");

    }

  });
