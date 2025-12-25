// Enhanced Animations JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
    });
    
    // Interactive cursor effects
    document.querySelectorAll('a, button, .holo-card, .gallery-item').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.borderColor = 'var(--secondary)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = 'var(--primary)';
        });
    });
    
    // Floating particles
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * 6 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 4 + 3;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            // Random color
            const colors = ['var(--primary)', 'var(--secondary)', '#ffffff'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Matrix rain effect
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const container = document.getElementById('matrixCanvas');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        container.appendChild(canvas);
        
        const chars = "01010101010101010101010101010101";
        const charArray = chars.split("");
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px arial";
            
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }
        
        setInterval(draw, 33);
    }
    
    // Initialize effects
    createParticles();
    createMatrixRain();
    
    // Scroll animations
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.holo-card, .gallery-item, .resume-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }
    
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Typing effect enhancement
    if (document.querySelector('.typed')) {
        // This will work with the existing typed.js initialization
        console.log('Typed.js is active');
    }
    
    // Skill bars animation on scroll
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.progress-bar');
        
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('aria-valuenow');
            if (isElementInViewport(bar)) {
                bar.style.width = percentage + '%';
            }
        });
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Initial check
});