// Funcionalidad principal de la página conmemorativa
document.addEventListener('DOMContentLoaded', function() {
    
    // Variables globales
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const closeModal = document.querySelector('.close');
    const interviewCards = document.querySelectorAll('.interview-card');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Inicialización
    initSmoothScrolling();
    initVideoModal();
    initScrollAnimations();
    initMobileMenu();
    initParallaxEffects();
    initCounterAnimations();
    
    // Navegación suave
    function initSmoothScrolling() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Cerrar menú móvil si está abierto
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                }
            });
        });
    }
    
    // Modal de videos
    function initVideoModal() {
        // Abrir modal al hacer clic en una tarjeta de entrevista
        interviewCards.forEach(card => {
            card.addEventListener('click', function() {
                // No abrir modal si es una tarjeta "Próximamente"
                if (this.classList.contains('coming-soon')) {
                    return;
                }
                
                const videoId = this.getAttribute('data-video');
                if (videoId) {
                    openVideoModal(videoId);
                }
            });
        });
        
        // Cerrar modal
        closeModal.addEventListener('click', closeVideoModal);
        
        // Cerrar modal al hacer clic fuera del contenido
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeVideoModal();
            }
        });
        
        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeVideoModal();
            }
        });
    }
    
    function openVideoModal(videoId) {
        const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        videoFrame.src = videoUrl;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Animación de entrada
        setTimeout(() => {
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 10);
    }
    
    function closeVideoModal() {
        modal.style.display = 'none';
        videoFrame.src = '';
        document.body.style.overflow = 'auto';
    }
    
    // Animaciones al hacer scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Animación especial para las estadísticas
                    if (entry.target.classList.contains('hero-stats')) {
                        animateCounters();
                    }
                    
                    // Animación especial para las tarjetas de entrevista
                    if (entry.target.classList.contains('interview-card')) {
                        setTimeout(() => {
                            entry.target.style.animationDelay = '0.1s';
                        }, 100);
                    }
                }
            });
        }, observerOptions);
        
        // Observar elementos que deben animarse
        const elementsToAnimate = document.querySelectorAll('.interview-card, .timeline-item, .testimonial-card, .hero-stats, .section-header');
        elementsToAnimate.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }
    
    // Menú móvil
    function initMobileMenu() {
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    }
    
    // Efectos parallax
    function initParallaxEffects() {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-element');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
            
            // Efecto parallax en el hero
            const hero = document.querySelector('.hero');
            if (hero) {
                const heroHeight = hero.offsetHeight;
                const scrolledPercent = scrolled / heroHeight;
                hero.style.transform = `translateY(${scrolledPercent * 50}px)`;
            }
        });
    }
    
    // Animación de contadores
    function initCounterAnimations() {
        // Los contadores se animarán cuando sean visibles
    }
    
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const suffix = counter.textContent.replace(/\d/g, '');
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        });
    }
    
    // Efectos de hover mejorados
    function initHoverEffects() {
        const cards = document.querySelectorAll('.interview-card, .testimonial-card, .timeline-content');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Inicializar efectos de hover
    initHoverEffects();
    
    // Cambio de header al hacer scroll
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
            
            // Ocultar/mostrar header al hacer scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    initHeaderScroll();
    
    // Lazy loading para imágenes
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    initLazyLoading();
    
    // Efectos de partículas en el hero
    function createParticles() {
        const hero = document.querySelector('.hero');
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(46, 134, 171, 0.3);
                border-radius: 50%;
                pointer-events: none;
                animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `;
            hero.appendChild(particle);
        }
    }
    
    createParticles();
    
    // Galería de fotos con lightbox
    function initPhotoGallery() {
        const photos = document.querySelectorAll('.timeline-photos img');
        
        photos.forEach(photo => {
            photo.addEventListener('click', function() {
                openPhotoLightbox(this.src, this.alt);
            });
        });
    }
    
    function openPhotoLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.className = 'photo-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${src}" alt="${alt}">
                <p>${alt}</p>
            </div>
        `;
        
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
            animation: fadeIn 0.3s ease-out;
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Cerrar lightbox
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                lightbox.remove();
                document.body.style.overflow = 'auto';
            }
        });
        
        // Cerrar con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                lightbox.remove();
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    initPhotoGallery();
    
    // Efectos de typing para el título principal
    function initTypingEffect() {
        const title = document.querySelector('.hero-main-title');
        if (!title) return;
        
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    initTypingEffect();
    
    // Preloader
    function initPreloader() {
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = `
            <div class="preloader-content">
                <div class="preloader-logo">Asperger para Asperger</div>
                <div class="preloader-spinner"></div>
                <div class="preloader-text">Cargando la experiencia conmemorativa, 10 años de historia...</div>
            </div>
        `;
        
        preloader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--light-blue) 0%, var(--light-purple) 50%, var(--light-orange) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease-out;
        `;
        
        document.body.appendChild(preloader);
        
        // Ocultar preloader cuando la página esté cargada
        window.addEventListener('load', function() {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }, 1500);
        });
    }
    
    initPreloader();
    
    // Efectos de sonido (opcional)
    function initSoundEffects() {
        const playButton = document.querySelectorAll('.play-button');
        
        playButton.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                // Aquí podrías agregar un sonido de clic
                // const audio = new Audio('click-sound.mp3');
                // audio.play();
            });
        });
    }
    
    initSoundEffects();
    
    // Funciones de utilidad
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
    
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Optimización de scroll con throttle
    const optimizedScrollHandler = throttle(function() {
        // Aquí van las funciones que se ejecutan en scroll
    }, 16); // ~60fps
    
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // Mensaje de bienvenida
    function showWelcomeMessage() {
        setTimeout(() => {
            const welcomeMessage = document.createElement('div');
            welcomeMessage.className = 'welcome-message';
            welcomeMessage.innerHTML = `
                <div class="welcome-content">
                    <h3>¡Bienvenido a nuestra celebración!</h3>
                    <p>Explora 10 años de historia, entrevistas y momentos especiales</p>
                    <button class="welcome-close">Comenzar</button>
                </div>
            `;
            
            welcomeMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--white);
                padding: var(--spacing-8);
                border-radius: 12px;
                box-shadow: var(--shadow-xl);
                z-index: 4000;
                text-align: center;
                max-width: 400px;
                animation: slideInDown 0.5s ease-out;
            `;
            
            document.body.appendChild(welcomeMessage);
            
            // Cerrar mensaje
            welcomeMessage.querySelector('.welcome-close').addEventListener('click', function() {
                welcomeMessage.remove();
            });
        }, 2000);
    }
    
    showWelcomeMessage();
    
    // Inicializar efectos conmemorativos
    initCelebrationEffects();
    
    console.log('🎉 Página conmemorativa de Asperger para Asperger cargada exitosamente');
    console.log('📅 Celebrando 10 años de comunidad y crecimiento');
    console.log('💙 Gracias por ser parte de esta increíble historia');
});

// Estilos adicionales para efectos dinámicos
const additionalStyles = `
    .preloader-content {
        text-align: center;
        color: var(--primary-color);
    }
    
    .preloader-logo {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }
    
    .preloader-spinner {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(46, 134, 171, 0.3);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    }
    
    .preloader-text {
        font-size: 1rem;
        color: var(--text-light);
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .particle {
        animation: float 6s ease-in-out infinite;
    }
    
    .photo-lightbox .lightbox-content {
        max-width: 90%;
        max-height: 90%;
        position: relative;
    }
    
    .photo-lightbox img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 8px;
    }
    
    .photo-lightbox p {
        color: var(--white);
        text-align: center;
        margin-top: 1rem;
        font-size: 1.1rem;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: var(--white);
        font-size: 2rem;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .welcome-content h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    
    .welcome-content p {
        color: var(--text-light);
        margin-bottom: 2rem;
    }
    
    .welcome-close {
        background: var(--primary-color);
        color: var(--white);
        border: none;
        padding: 0.75rem 2rem;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition-normal);
    }
    
    .welcome-close:hover {
        background: var(--secondary-color);
        transform: translateY(-2px);
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        box-shadow: var(--shadow-lg);
        padding: 1rem;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;

// Función para inicializar efectos conmemorativos
function initCelebrationEffects() {
    // Efecto de confetti al hacer clic en elementos importantes
    const celebrationElements = document.querySelectorAll('.interview-card, .section-title, .hero-main-title');
    
    celebrationElements.forEach(element => {
        element.addEventListener('click', function() {
            createClickConfetti(event.clientX, event.clientY);
        });
    });
    
    // Efecto de partículas doradas al hacer scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (Math.random() > 0.7) {
                createScrollParticles();
            }
        }, 100);
    });
    
    // Efecto especial en el badge de aniversario
    const anniversaryBadge = document.querySelector('.anniversary-badge-floating');
    if (anniversaryBadge) {
        anniversaryBadge.addEventListener('click', function() {
            createSpecialCelebration();
        });
    }
}

// Crear confetti al hacer clic
function createClickConfetti(x, y) {
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'click-confetti';
        confetti.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 8px;
            height: 8px;
            background: ${getRandomColor()};
            border-radius: 2px;
            pointer-events: none;
            z-index: 9999;
            animation: clickConfettiFall 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 1500);
    }
}

// Crear partículas al hacer scroll
function createScrollParticles() {
    const particle = document.createElement('div');
    particle.className = 'scroll-particle';
    particle.style.cssText = `
        position: fixed;
        left: ${Math.random() * window.innerWidth}px;
        top: ${window.innerHeight}px;
        width: 3px;
        height: 3px;
        background: radial-gradient(circle, #FFD700, #FFA500);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        animation: scrollParticleRise 3s ease-out forwards;
        box-shadow: 0 0 6px rgba(255, 215, 0, 0.6);
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Crear celebración especial
function createSpecialCelebration() {
    // Crear múltiples confetti
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createClickConfetti(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 50);
    }
    
    // Efecto de brillo en el título principal
    const mainTitle = document.querySelector('.hero-main-title');
    if (mainTitle) {
        mainTitle.style.animation = 'title-glow 0.5s ease-in-out 3';
    }
}

// Obtener color aleatorio para confetti
function getRandomColor() {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFA500'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Agregar estilos adicionales para efectos dinámicos
const celebrationStyles = `
    @keyframes clickConfettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes scrollParticleRise {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
        }
    }
    
    .click-confetti {
        animation: clickConfettiFall 1.5s ease-out forwards;
    }
    
    .scroll-particle {
        animation: scrollParticleRise 3s ease-out forwards;
    }
`;

// Inyectar estilos de celebración
const celebrationStyleSheet = document.createElement('style');
celebrationStyleSheet.textContent = celebrationStyles;
document.head.appendChild(celebrationStyleSheet);

// Inyectar estilos adicionales
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
