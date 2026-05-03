window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('fade-out');
        // Prevent scroll until loaded
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Initial state: prevent scroll
    document.body.style.overflow = 'hidden';
    const header = document.getElementById('career-header');
    const hero = document.getElementById('career-hero');

    if (header && hero) {
        let ticking = false;

        const updateHeader = () => {
            const heroBottom = hero.getBoundingClientRect().bottom;
            if (heroBottom <= 200) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateHeader();
    }
});
