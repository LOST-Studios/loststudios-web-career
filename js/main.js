document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('career-header');
    const hero = document.getElementById('career-hero');

    if (header && hero) {
        /**
         * Using IntersectionObserver for better performance.
         * The header becomes visible when the hero section is 80% out of view.
         */
        const observerOptions = {
            root: null,
            threshold: 0.2 // Trigger when only 20% of the hero is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    header.classList.add('visible');
                } else {
                    header.classList.remove('visible');
                }
            });
        }, observerOptions);

        observer.observe(hero);
    }
});
