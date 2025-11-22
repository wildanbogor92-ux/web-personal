// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#ff6b00', '#0066ff', '#ffd700']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff6b00',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll
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

// AOS Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Skills Animation
const skillsSection = document.querySelector('.skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            animateSkills();
            skillsAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, 200);
    });
}

// Portfolio Data (You'll need to add your actual portfolio items here)
const portfolioData = [
    {
        title: 'Brand Identity',
        category: 'Branding',
        image: 'images/portfolio/project1.jpg'
    },
    {
        title: 'Social Media Design',
        category: 'Digital Marketing',
        image: 'images/portfolio/project2.jpg'
    },
    {
        title: 'Logo Design',
        category: 'Branding',
        image: 'images/portfolio/project3.jpg'
    },
    {
        title: 'Poster Design',
        category: 'Graphic Design',
        image: 'images/portfolio/project4.jpg'
    },
    {
        title: 'Packaging Design',
        category: 'Product Design',
        image: 'images/portfolio/project5.jpg'
    },
    {
        title: 'Marketing Materials',
        category: 'Marketing',
        image: 'images/portfolio/project6.jpg'
    }
];

// Load Portfolio Items
function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    portfolioData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-aos', 'fade-up');
        portfolioItem.setAttribute('data-aos-delay', (index * 100).toString());
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="portfolio-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ff6b00%22 width=%22400%22 height=%22300%22/%3E%3Ctext fill=%22%23ffffff%22 font-family=%22Arial%22 font-size=%2224%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${item.title}%3C/text%3E%3C/svg%3E'">
            <div class="portfolio-overlay">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-category">${item.category}</p>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Re-observe new elements
    document.querySelectorAll('.portfolio-item[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Load portfolio on page load
window.addEventListener('DOMContentLoaded', loadPortfolio);

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            senderEmail: document.getElementById('senderEmail').value,
            senderPassword: document.getElementById('senderPassword').value
        };
        
        // Get UI elements
        const submitBtn = document.getElementById('submitBtn');
        const btnText = document.getElementById('btnText');
        const btnIcon = document.getElementById('btnIcon');
        const spinner = document.getElementById('spinner');
        const formMessage = document.getElementById('formMessage');
        
        // Show loading state
        submitBtn.classList.add('loading');
        btnText.textContent = 'Sending...';
        btnIcon.style.display = 'none';
        spinner.style.display = 'inline-block';
        formMessage.style.display = 'none';
        
        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                // Success
                formMessage.className = 'form-message success';
                formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! Thank you for contacting me.';
                formMessage.style.display = 'block';
                contactForm.reset();
            } else {
                // Error from server
                formMessage.className = 'form-message error';
                formMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${result.message || 'Failed to send message. Please try again.'}`;
                formMessage.style.display = 'block';
            }
        } catch (error) {
            // Network error
            console.error('Error:', error);
            formMessage.className = 'form-message error';
            formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Connection failed. Please make sure the server is running.';
            formMessage.style.display = 'block';
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            btnText.textContent = 'Send Message';
            btnIcon.style.display = 'inline';
            spinner.style.display = 'none';
        }
    });
}

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('senderPassword');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Cursor Effect
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

// Add cursor styles
const cursorStyles = document.createElement('style');
cursorStyles.innerHTML = `
    .custom-cursor {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primary-color);
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        box-shadow: 0 0 20px var(--primary-color);
    }
    
    .cursor-follower {
        width: 40px;
        height: 40px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0.5;
    }
    
    .custom-cursor.active {
        transform: scale(0.5);
    }
    
    .cursor-follower.active {
        transform: scale(1.5);
    }
`;
document.head.appendChild(cursorStyles);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.3;
    cursorY += (mouseY - cursorY) * 0.3;
    
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    cursorFollower.style.left = followerX - 20 + 'px';
    cursorFollower.style.top = followerY - 20 + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add active state to cursor on clickable elements
document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

const aboutSection = document.querySelector('.about');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add typing effect to hero description
const heroDescription = document.querySelector('.hero-description');
if (heroDescription) {
    const text = heroDescription.textContent;
    heroDescription.textContent = '';
    let i = 0;
    
    setTimeout(() => {
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                heroDescription.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 50);
    }, 1500);
}

// Add Naruto-themed easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateNarutoMode();
    }
});

function activateNarutoMode() {
    // Add special Naruto-themed effects
    const body = document.body;
    body.style.animation = 'rainbow 5s linear infinite';
    
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Show a Naruto quote
    const quotes = [
        "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!",
        "Hard work is worthless for those that don't believe in themselves.",
        "If you don't like your destiny, don't accept it. Instead have the courage to change it the way you want it to be!",
        "A smile is the best way to get through a tough situation, even if it's a fake one."
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    const quoteDiv = document.createElement('div');
    quoteDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 107, 0, 0.95);
        padding: 2rem;
        border-radius: 10px;
        z-index: 10000;
        max-width: 500px;
        text-align: center;
        font-size: 1.2rem;
        box-shadow: 0 0 50px rgba(255, 107, 0, 0.8);
        animation: fadeIn 0.5s ease;
    `;
    quoteDiv.innerHTML = `<p>"${randomQuote}"</p><p style="margin-top: 1rem; font-weight: 700;">- Naruto Uzumaki</p>`;
    document.body.appendChild(quoteDiv);
    
    setTimeout(() => {
        quoteDiv.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            quoteDiv.remove();
            body.style.animation = '';
        }, 500);
    }, 5000);
}

// Add fade animations
const fadeStyles = document.createElement('style');
fadeStyles.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(fadeStyles);

// Preloader
window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--darker-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        transition: opacity 0.5s ease;
    `;
    
    preloader.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 4rem; animation: rotate 2s linear infinite;">🍥</div>
            <div style="font-family: 'Orbitron', sans-serif; font-size: 1.5rem; color: var(--primary-color); margin-top: 1rem;">Loading...</div>
        </div>
    `;
    
    document.body.appendChild(preloader);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1500);
});

console.log('%c🍥 Believe it! Welcome to my portfolio!', 'color: #ff6b00; font-size: 20px; font-weight: bold;');
console.log('%cMade with ❤️ and the spirit of a ninja', 'color: #ffd700; font-size: 14px;');
