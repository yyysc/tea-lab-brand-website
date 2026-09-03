// swiper

var swiper = new Swiper(".mySwiper", {

    slidesPerView: 3,

    spaceBetween: 30,

    loop: true,

    autoplay: {

        delay: 2500,

        disableOnInteraction: false,
    },

    breakpoints: {

        0: {

            slidesPerView: 1
        },

        768: {

            slidesPerView: 2
        },

        1200: {

            slidesPerView: 3
        }
    }
});

// aos

AOS.init({

    duration: 1200,

    once: true
});

// header scroll

window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";
    }
});


const menuToggle = document.getElementById("menuToggle");

const mobileMenu = document.getElementById("mobileMenu");

const closeMenu = document.getElementById("closeMenu");


menuToggle.addEventListener("click", () => {

    mobileMenu.classList.add("active");
});


closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
});


// 点击链接自动关闭

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
    });
});


// ================= LANGUAGE SWITCH =================

const langToggle = document.getElementById("langToggle");

let currentLang = "en";

langToggle.addEventListener("click", () => {

    const elements = document.querySelectorAll("[data-en]");

    const langTexts = langToggle.querySelectorAll("span");

    if(currentLang === "en"){

        elements.forEach(el => {

            el.innerText = el.getAttribute("data-zh");
        });

        currentLang = "zh";

        langTexts[0].classList.remove("active-lang");

        langTexts[1].classList.add("active-lang");

    }else{

        elements.forEach(el => {

            el.innerText = el.getAttribute("data-en");
        });

        currentLang = "en";

        langTexts[1].classList.remove("active-lang");

        langTexts[0].classList.add("active-lang");
    }
});