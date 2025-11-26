// ===================================
// CodeXpert - JavaScript Functionality
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== Mobile Menu Toggle =====
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    mobileMenuToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');

        // Animate toggle button
        if (navbarMenu.classList.contains('active')) {
            mobileMenuToggle.textContent = '✕';
        } else {
            mobileMenuToggle.textContent = '☰';
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarMenu.classList.remove('active');
            mobileMenuToggle.textContent = '☰';
        });
    });

    // ===== Smooth Scroll for Navigation Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Intersection Observer for Fade-in Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // ===== Contact Form Validation & Submission =====
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Get error elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const subjectError = document.getElementById('subject-error');
        const messageError = document.getElementById('message-error');

        // Reset errors
        nameError.classList.remove('active');
        emailError.classList.remove('active');
        subjectError.classList.remove('active');
        messageError.classList.remove('active');

        let isValid = true;

        // Validate name
        if (name.value.trim() === '') {
            nameError.classList.add('active');
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            emailError.classList.add('active');
            isValid = false;
        }

        // Validate subject
        if (subject.value.trim() === '') {
            subjectError.classList.add('active');
            isValid = false;
        }

        // Validate message
        if (message.value.trim() === '') {
            messageError.classList.add('active');
            isValid = false;
        }

        // If form is valid, show success message
        if (isValid) {
            // Log form data (in production, this would be sent to a server)
            console.log('Form submitted:', {
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            });

            // Show success message
            formSuccess.style.display = 'block';
            contactForm.style.display = 'none';

            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset form after 3 seconds and show it again
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'flex';
                formSuccess.style.display = 'none';
            }, 5000);
        }
    });

    // ===== Instagram Link Analytics =====
    const instagramLink = document.getElementById('instagram-link');

    instagramLink.addEventListener('click', function () {
        console.log('Instagram link clicked - User navigating to @xpert.code10');
    });

    // ===== Dynamic Showcase Item Interaction =====
    const showcaseItems = document.querySelectorAll('.showcase-item');

    showcaseItems.forEach(item => {
        item.addEventListener('click', function () {
            // Add a pulse animation on click
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });

    // ===== Add Logo to Navbar =====
    // Copy the generated logo to the project directory
    const logo = document.getElementById('logo');
    logo.onerror = function () {
        // If logo doesn't load, hide it gracefully
        this.style.display = 'none';
    };

    // ===== Console Welcome Message =====
    console.log('%cWelcome to CodeXpert! 🚀', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cTech Content Creation & Animations', 'color: #00f2fe; font-size: 14px;');
    console.log('%cFollow us: https://www.instagram.com/xpert.code10/', 'color: #f093fb; font-size: 12px;');

    // ===== Keyboard Navigation Enhancement =====
    document.addEventListener('keydown', function (e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            mobileMenuToggle.textContent = '☰';
        }
    });

    // ===== Loading Animation Complete =====
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// ===== Utility Functions =====

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== Zerox AI - WhatsApp Integration =====
document.addEventListener('DOMContentLoaded', function () {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');

    // WhatsApp number for Zerox AI purchase inquiries
    const whatsappNumber = '9779807060125'; // Nepal: +977 9807060125

    // Custom messages for each plan
    const planMessages = {
        basic: `Hello! I'm interested in the *Zerox AI Basic Plan* (₹999/month).

I would like to know more about:
- Voice Commands
- Basic Automations
- Smart Home Control

Please provide me with more details to proceed with the purchase.

Thank you!`,

        pro: `Hello! I'm interested in the *Zerox AI Pro Plan* (₹1,999/month).

I'm excited about the advanced features including:
- Advanced AI Learning
- Custom Voice Training
- Multi-Device Sync
- Priority Support
- API Access

I would like to discuss the purchase process and get started.

Thank you!`,

        enterprise: `Hello! I'm interested in the *Zerox AI Enterprise Plan* (₹4,999/month).

I'm looking for enterprise-level features:
- Unlimited Devices
- Custom Integrations
- Dedicated Support
- Advanced Analytics
- White Label Option

I would like to schedule a call to discuss our requirements and how Zerox AI can benefit our organization.

Thank you!`
    };

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const plan = this.getAttribute('data-plan');
            const message = planMessages[plan] || planMessages.basic;

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');

            // Log for analytics
            console.log(`Zerox AI ${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan - WhatsApp redirect initiated`);
        });
    });
});
