/**
 * Abhishek Jha - Portfolio JavaScript Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Mobile Navigation Menu Toggle
    // ----------------------------------------------------
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close mobile menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
    }

    // ----------------------------------------------------
    // 2. Scroll Active Navigation Highlight
    // ----------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavOnScroll() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // ----------------------------------------------------
    // 3. Contact Form Submission & Toast Notification
    // ----------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toastNotification');

    if (contactForm && toast) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('formName').value.trim();
            const emailInput = document.getElementById('formEmail').value.trim();
            const messageInput = document.getElementById('formMessage').value.trim();

            if (!nameInput || !emailInput || !messageInput) {
                return;
            }

            // Show success toast
            toast.classList.add('show');
            
            // Clear inputs
            contactForm.reset();

            // Hide toast after 4 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        });
    }

    // ----------------------------------------------------
    // 4. Subtle Parallax/Tilt Effect for Avatar Orbit
    // ----------------------------------------------------
    const heroAvatarWrapper = document.querySelector('.hero-avatar-wrapper');

    if (heroAvatarWrapper) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const moveX = (clientX - centerX) / 40;
            const moveY = (clientY - centerY) / 40;

            heroAvatarWrapper.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
});
