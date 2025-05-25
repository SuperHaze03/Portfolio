// Vanilla JavaScript implementation for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio scroll animation setup
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const animationConfig = {
        threshold: 0.2,
        rootMargin: '50px 0px'
    };

    // Add initial animation classes
    portfolioItems.forEach((item, index) => {
        // Alternating left/right animation
        const direction = index % 2 === 0 ? 'left' : 'right';
        item.classList.add(`animate-from-${direction}`);
        
        // Add stagger delay
        item.style.transitionDelay = `${index * 150}ms`;
        
        // Store original transform for hover effects
        item.dataset.originalTransform = item.style.transform || '';
    });

    // Intersection Observer for scroll detection
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add visible class with additional delay for stagger effect
                setTimeout(() => {
                    entry.target.classList.remove('animate-from-left', 'animate-from-right');
                    entry.target.classList.add('animate-visible');
                }, index * 100);
                
                // Unobserve after animation to prevent re-triggering
                setTimeout(() => {
                    observer.unobserve(entry.target);
                }, 1000);
            }
        });
    }, animationConfig);

    // Start observing all portfolio items
    portfolioItems.forEach(item => {
        observer.observe(item);
    });

    // Enhanced hover effects
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (this.classList.contains('animate-visible')) {
                this.style.transform = 'translateY(-8px) scale(1.03)';
                this.style.boxShadow = '0 20px 40px rgba(255, 85, 85, 0.25)';
                
                // Animate tech tags
                const techTags = this.querySelectorAll('.tech-tag');
                techTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.transform = 'scale(1.1)';
                        tag.style.backgroundColor = '#FF5555';
                    }, index * 50);
                });
            }
        });

        item.addEventListener('mouseleave', function() {
            if (this.classList.contains('animate-visible')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
                
                // Reset tech tags
                const techTags = this.querySelectorAll('.tech-tag');
                techTags.forEach(tag => {
                    tag.style.transform = 'scale(1)';
                    tag.style.backgroundColor = '';
                });
            }
        });
    });

    // Optional: Add scroll progress indicator
    function addScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #FF5555, #FF8888);
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = `${scrollPercent}%`;
        });
    }

    // Enable scroll progress (optional)
    addScrollProgress();
});

// Advanced animation variants for different screen sizes
function handleResponsiveAnimations() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleScreenChange(e) {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach((item, index) => {
            if (e.matches) {
                // Mobile: animate from bottom
                item.classList.remove('animate-from-left', 'animate-from-right');
                item.classList.add('animate-from-bottom');
            } else {
                // Desktop: alternate left/right
                const direction = index % 2 === 0 ? 'left' : 'right';
                item.classList.remove('animate-from-bottom');
                item.classList.add(`animate-from-${direction}`);
            }
        });
    }
    
    handleScreenChange(mediaQuery);
    mediaQuery.addEventListener('change', handleScreenChange);
}

// Initialize responsive animations
handleResponsiveAnimations();

// Utility function for manual trigger (if needed)
function triggerPortfolioAnimation() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.remove('animate-from-left', 'animate-from-right', 'animate-from-bottom');
            item.classList.add('animate-visible');
        }, index * 200);
    });
}