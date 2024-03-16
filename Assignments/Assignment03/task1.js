// script.js

// Change navbar background on scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('bg-dark');
    } else {
        $('.navbar').removeClass('bg-dark');
    }
});

// Use anime.js for a fade-in animation when the page loads
function animateAchievements(targets) {
    anime({
        targets: targets,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: (el, i) => i * 200, // Adjust the delay between animations
    });
}

// Animation for Achievements 1, 2, and 3
animateAchievements('#achievement1, #achievement2, #achievement3');

// Animation for Service Cards
anime({
    targets: '.card',
    rotate: '+=360deg',
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: anime.stagger(200, { start: 500 }), // Delay for a staggered animation effect
});

// AOS initialization
AOS.init({
    duration: 1200, // You can adjust the duration of the AOS animations
});

// Custom animation using plain JavaScript for timeline items
function animateTimelineItems() {
    var timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(function (item) {
        var animationType = item.getAttribute('data-animation');

        item.style.opacity = 0;
        item.style.transform = 'translateX(-50px)';

        window.addEventListener('scroll', function () {
            var itemTop = item.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 50) {
                item.style.opacity = 1;
                item.style.transform = 'translateX(0)';
                item.classList.add(animationType);
            }
        });
    });
}

animateTimelineItems();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
