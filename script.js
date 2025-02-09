const currentPage = window.location.pathname;
    
            // Define which link matches which page
            const pages = {
                'index.html': 'home',
                'gallery.html': 'gallery',
                'about.html': 'about',
            };
    
            // Find the current page's ID
            const currentId = pages[currentPage.split('/').pop()];
    
            // If a match is found, apply the active class
            if (currentId) {
                document.getElementById(currentId).classList.add('active');
}

function goBack() {
    window. history. back();
}


const carousel = document.querySelector('.container-carousel');

let isDragging = false;
let startX, scrollLeft;

// Mouse Down Event
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

// Mouse Leave Event
carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.classList.remove('active');
});

// Mouse Up Event
carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.classList.remove('active');
});

// Mouse Move Event
carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    carousel.scrollLeft = scrollLeft - walk;
});

// Touch Events for Mobile Devices
let touchStartX, touchScrollLeft;

// Touch Start Event
carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = carousel.scrollLeft;
});

// Touch Move Event
carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 2; // Adjust sensitivity
    carousel.scrollLeft = touchScrollLeft - walk;
});












const menuCarousel = document.querySelector('.menu-under-container-carousel');

let isMenuDragging = false;
let menuStartX, menuScrollLeft;

// Mouse Down Event
menuCarousel.addEventListener('mousedown', (e) => {
    isMenuDragging = true;
    menuCarousel.classList.add('menu-active');
    menuStartX = e.pageX - menuCarousel.offsetLeft;
    menuScrollLeft = menuCarousel.scrollLeft;
});

// Mouse Leave Event
menuCarousel.addEventListener('mouseleave', () => {
    isMenuDragging = false;
    menuCarousel.classList.remove('menu-active');
});

// Mouse Up Event
menuCarousel.addEventListener('mouseup', () => {
    isMenuDragging = false;
    menuCarousel.classList.remove('menu-active');
});

// Mouse Move Event
menuCarousel.addEventListener('mousemove', (e) => {
    if (!isMenuDragging) return;
    e.preventDefault();
    const x = e.pageX - menuCarousel.offsetLeft;
    const walk = (x - menuStartX) * 2; // Multiply for faster scrolling
    menuCarousel.scrollLeft = menuScrollLeft - walk;
});

// Touch Events for Mobile Devices
let menuTouchStartX, menuTouchScrollLeft;

// Touch Start Event
menuCarousel.addEventListener('touchstart', (e) => {
    menuTouchStartX = e.touches[0].pageX;
    menuTouchScrollLeft = menuCarousel.scrollLeft;
});

// Touch Move Event
menuCarousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - menuTouchStartX) * 2; // Adjust sensitivity
    menuCarousel.scrollLeft = menuTouchScrollLeft - walk;
});


const partnerCarousel = document.querySelector('.partner-carousel');

let isDraggingCarousel = false, startDragPosition, initialScrollPosition;

partnerCarousel.addEventListener('mousedown', (event) => {
    isDraggingCarousel = true;
    partnerCarousel.classList.add('is-dragging');
    startDragPosition = event.pageX - partnerCarousel.offsetLeft;
    initialScrollPosition = partnerCarousel.scrollLeft;
});

partnerCarousel.addEventListener('mouseleave', () => {
    isDraggingCarousel = false;
    partnerCarousel.classList.remove('is-dragging');
});

partnerCarousel.addEventListener('mouseup', () => {
    isDraggingCarousel = false;
    partnerCarousel.classList.remove('is-dragging');
});

partnerCarousel.addEventListener('mousemove', (event) => {
    if (!isDraggingCarousel) return;
    event.preventDefault();
    const currentDragPosition = event.pageX - partnerCarousel.offsetLeft;
    const distanceDragged = (currentDragPosition - startDragPosition) * 2; // Adjust the multiplier for sensitivity
    partnerCarousel.scrollLeft = initialScrollPosition - distanceDragged;
});



const partnerContainers = document.querySelectorAll('.partner-container');

// Add click event listener to each partner-container
partnerContainers.forEach((container) => {
    container.addEventListener('click', () => {
        const link = container.getAttribute('data-link'); // Retrieve the hidden link
        if (link) {
            window.open(link, '_blank'); // Open the link in a new tab
        }
    });
});





function set_active_item(index) {
    const faqItems = document.querySelectorAll('.faq_item');  // Get all FAQ elements

    // Loop through all FAQ items to toggle active state
    faqItems.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('faq_item_active'); // Toggle class for active item
        } else {
            item.classList.remove('faq_item_active'); // Remove class for non-active items
        }
    });
}




document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const adBanner = document.getElementById("adBanner");
    const adCloseButton = document.getElementById("adCloseButton");
    const cookieBanner = document.getElementById("cookieBanner");
    const cookieAcceptButton = document.getElementById("cookieAcceptButton");

    // Функция для блокировки/разблокировки скролла
    function toggleScroll(block) {
        document.body.style.overflow = block ? "hidden" : "auto";
    }

    // Функция для показа баннеров с затемнением фона
    function showBanners() {
        overlay.style.display = "block";
        adBanner.style.display = "flex";
        cookieBanner.style.display = "flex";
        toggleScroll(true);
    }

    // Скрыть рекламу
    adCloseButton.addEventListener("click", () => {
        adBanner.style.display = "none";
        checkOverlay();
    });

    // Принять cookie
    cookieAcceptButton.addEventListener("click", () => {
        cookieBanner.style.display = "none";
        document.cookie = "cookie_acc=ok; max-age=31536000; path=/";
        checkOverlay();
    });

    // Убирает затемнённый фон и разблокирует скролл, если все баннеры скрыты
    function checkOverlay() {
        if (adBanner.style.display === "none" && cookieBanner.style.display === "none") {
            overlay.style.display = "none";
            toggleScroll(false);
        }
    }

    // Показываем баннеры (здесь можно настроить логику показа)
    const cookieAccepted = document.cookie.includes("cookie_acc=ok");
    if (!cookieAccepted) {
        showBanners();
    }
});

