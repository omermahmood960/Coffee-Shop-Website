    // Menubar js
    const navMenu = document.querySelector(".nav-menu");
    const menuOpenButton = document.querySelector(".menu-open-button");
    const menuCloseButton = document.querySelector(".menu-close-button");

    // Open mobile menu
    menuOpenButton.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });

    // Close mobile menu
    menuCloseButton.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });

    // Optional: Close menu when clicking any nav link on mobile
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    });
    //Initialize Swipper
    const swiper = new Swiper('.slider-container', {
        // Optional parameters
        loop: true,
        spaceBetween: 25,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });