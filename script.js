// Hero Image Slider
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
let slideInterval;

function startSlider() {
    slideInterval = setInterval(() => {
        heroSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }, 6000); // Change slide every 4 seconds
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Initialize slider when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (heroSlides.length > 0) {
        startSlider();
    }
});

// Pause slider when user is not on the page
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        stopSlider();
    } else {
        startSlider();
    }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
    body.classList.add('dark-mode');
    updateDarkModeIcon(true);
}

// Dark mode toggle functionality
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    
    // Update icon
    updateDarkModeIcon(isDarkMode);
});

function updateDarkModeIcon(isDarkMode) {
    const icon = darkModeToggle.querySelector('i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        this.reset();
    });
}

// Notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Open PDF function for notes
function openPDF(pdfName) {
    try {
        // Open PDF in new tab
        window.open(pdfName, '_blank');
        
        // Show success notification
        showNotification(`Opening ${pdfName.split('/').pop()}...`, 'success');
    } catch (error) {
        // Show error notification if PDF fails to open
        showNotification(`Failed to open PDF: ${pdfName}`, 'error');
        console.error('PDF open error:', error);
    }
}

// Add active state to navigation based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath) || (currentPath === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button when scrolling down
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 30px;
    background-color: var(--primary-color);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: var(--shadow-lg);
    transition: var(--transition);
    z-index: 999;
`;

scrollToTopBtn.addEventListener('click', scrollToTop);
document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Add hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.backgroundColor = 'var(--secondary-color)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = 'var(--primary-color)';
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and other elements
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .note-card, .announcement-item, .institute-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle resize events
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }, 250);
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Print functionality
function printPage() {
    window.print();
}

// Contact Page Slider
const contactSlides = document.querySelectorAll('.contact-slide');
let currentContactSlide = 0;
let contactSlideInterval;
let isContactPaused = false;

function showContactSlide(index) {
    contactSlides[currentContactSlide].classList.remove('active');
    currentContactSlide = index;
    contactSlides[currentContactSlide].classList.add('active');
}

function nextContactSlide() {
    const nextIndex = (currentContactSlide + 1) % contactSlides.length;
    showContactSlide(nextIndex);
}

function startContactSlider() {
    if (!isContactPaused && contactSlides.length > 0) {
        contactSlideInterval = setInterval(nextContactSlide, 4000); // 4 seconds
    }
}

function stopContactSlider() {
    clearInterval(contactSlideInterval);
}

// Institute Page Slider
const instituteSlides = document.querySelectorAll('.institute-slide');
const instituteDots = document.querySelectorAll('.dot');
let currentInstituteSlide = 0;
let instituteSlideInterval;
let isPaused = false;

function showInstituteSlide(index) {
    instituteSlides[currentInstituteSlide].classList.remove('active');
    instituteDots[currentInstituteSlide].classList.remove('active');
    
    currentInstituteSlide = index;
    
    instituteSlides[currentInstituteSlide].classList.add('active');
    instituteDots[currentInstituteSlide].classList.add('active');
}

function nextInstituteSlide() {
    const nextIndex = (currentInstituteSlide + 1) % instituteSlides.length;
    showInstituteSlide(nextIndex);
}

function startInstituteSlider() {
    if (!isPaused && instituteSlides.length > 0) {
        instituteSlideInterval = setInterval(nextInstituteSlide, 5000); // 5 seconds
    }
}

function stopInstituteSlider() {
    clearInterval(instituteSlideInterval);
}

// Initialize sliders
document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact slider
    if (contactSlides.length > 0) {
        startContactSlider();
        
        // Pause on hover
        const contactPageHeader = document.querySelector('.page-header');
        if (contactPageHeader) {
            contactPageHeader.addEventListener('mouseenter', () => {
                isContactPaused = true;
                stopContactSlider();
            });
            
            contactPageHeader.addEventListener('mouseleave', () => {
                isContactPaused = false;
                startContactSlider();
            });
        }
    }
    
    // Initialize institute slider
    if (instituteSlides.length > 0) {
        // Start auto-slide
        startInstituteSlider();
        
        // Add click handlers to dots
        instituteDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showInstituteSlide(index);
            });
        });
        
        // Pause on hover
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.addEventListener('mouseenter', () => {
                isPaused = true;
                stopInstituteSlider();
            });
            
            pageHeader.addEventListener('mouseleave', () => {
                isPaused = false;
                startInstituteSlider();
            });
        }
        
        // Pause when page is not visible
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopInstituteSlider();
            } else {
                startInstituteSlider();
            }
        });
    }
});

// Add print styles dynamically
const printStyles = document.createElement('style');
printStyles.textContent = `
    @media print {
        .navbar, .whatsapp-float, .scroll-to-top, .dark-mode-toggle {
            display: none !important;
        }
        
        .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        
        body {
            background: white !important;
            color: black !important;
        }
        
        .feature-card, .note-card, .announcement-item, .institute-card {
            break-inside: avoid;
            page-break-inside: avoid;
        }
    }
`;
document.head.appendChild(printStyles);
