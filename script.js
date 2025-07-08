// =============================================
// LOADING ANIMATION
// =============================================
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');
    
    // Remove loader from DOM after animation completes
    loader.addEventListener('transitionend', function() {
        document.body.removeChild(loader);
    });
});

// =============================================
// NAVBAR FUNCTIONALITY
// =============================================
(function() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-links');
    const navLinks = document.querySelectorAll('.nav-link');

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
})();

// =============================================
// MENU CATEGORY TABS AND MODAL
// =============================================
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // Tab functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        const menuCategories = document.querySelectorAll('.menu-category');
        
        // Show indian by default
        document.getElementById('indian').classList.add('active');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all buttons
                tabBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get category to show
                const categoryId = this.getAttribute('data-category');
                
                // Hide all categories
                menuCategories.forEach(category => {
                    category.classList.remove('active');
                });
                
                // Show selected category
                document.getElementById(categoryId).classList.add('active');
            });
        });
        
        // Modal functionality
        const modal = document.getElementById('menu-modal');
        const modalOpenBtn = document.querySelector('.menu-cta .btn');
        const modalCloseBtn = document.querySelector('.modal-close');
        
        modalOpenBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        modalCloseBtn.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
})();

// =============================================
// TESTIMONIAL SLIDER
// =============================================
(function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
            slide.style.opacity = '0';
        });
        
        slides[index].style.display = 'block';
        setTimeout(() => {
            slides[index].style.opacity = '1';
        }, 10);
        
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Initialize first slide
    showSlide(0);

    // Next/Previous buttons
    document.querySelector('.next-testimonial')?.addEventListener('click', nextSlide);
    document.querySelector('.prev-testimonial')?.addEventListener('click', prevSlide);

    // Auto-rotate testimonials
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function pauseSlider() {
        clearInterval(slideInterval);
    }

    // Pause on hover
    const sliderContainer = document.querySelector('.testimonials-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', pauseSlider);
        sliderContainer.addEventListener('mouseleave', startSlider);
    }

    startSlider();
})();

// =============================================
// BACK TO TOP BUTTON
// =============================================
(function() {
    const backToTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

// =============================================
// FORM VALIDATION
// =============================================
(function() {
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const name = document.getElementById('name');
            const date = document.getElementById('date');
            const time = document.getElementById('time');
            const guests = document.getElementById('guests');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            
            let isValid = true;
            
            // Validate each field
            if (!name.value.trim()) {
                isValid = false;
                name.classList.add('error');
            } else {
                name.classList.remove('error');
            }
            
            if (!date.value) {
                isValid = false;
                date.classList.add('error');
            } else {
                date.classList.remove('error');
            }
            
            if (!time.value) {
                isValid = false;
                time.classList.add('error');
            } else {
                time.classList.remove('error');
            }
            
            if (!guests.value) {
                isValid = false;
                guests.classList.add('error');
            } else {
                guests.classList.remove('error');
            }
            
            if (!email.value.trim() || !email.checkValidity()) {
                isValid = false;
                email.classList.add('error');
            } else {
                email.classList.remove('error');
            }
            
            if (!phone.value.trim()) {
                isValid = false;
                phone.classList.add('error');
            } else {
                phone.classList.remove('error');
            }
            
            // Submit form if valid
            if (isValid) {
                // Here you would typically send the data to a server
                alert('Reservation submitted successfully! We will contact you shortly to confirm.');
                bookingForm.reset();
            } else {
                alert('Please fill in all required fields correctly.');
            }
        });
    }
})();

// =============================================
// FOOTER FUNCTIONALITY
// =============================================
(function() {
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
})();

// =============================================
// SMOOTH SCROLLING
// =============================================
(function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
})();

// =============================================
// ANIMATION ON SCROLL
// =============================================
(function() {
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }

    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
})();

// =============================================
// IMAGE LAZY LOADING
// =============================================
(function() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
})();