document.addEventListener('DOMContentLoaded', () => {
    // ────────────────────────────────────────────────────────── NAVIGATION ──────────────────────────────────────────────────────────
    const navBtns = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.toggle('active', page.id === pageId);
        });

        navBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === pageId);
        });

        // Close mobile menu after navigation
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            mobileToggle.classList.remove('active');
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showPage(btn.dataset.page);
        });
    });

    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        mobileToggle.classList.toggle('active');
    });

    // Handle initial hash routing or default home
    const initialPage = window.location.hash.replace('#', '') || 'home';
    showPage(initialPage);

    // ───────────────────────────────────────────────────────────── FAQ ─────────────────────────────────────────────────────────────
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isOpen = content.classList.contains('open');

            // Close all other FAQs
            document.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));
            document.querySelectorAll('.faq-toggle').forEach(t => t.classList.remove('active'));

            if (!isOpen) {
                content.classList.add('open');
                toggle.classList.add('active');
            }
        });
    });

    // ──────────────────────────────────────────────────────── ANIMATIONS ────────────────────────────────────────────────────────
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add reveal class to cards and headers for subtle scroll animations
    const revealElements = document.querySelectorAll('.part-card, .trust-card, .benefit-card, .section-header');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    // Custom observer for reveal class
    document.addEventListener('scroll', () => {
        revealElements.forEach(el => {
            if (el.classList.contains('revealed')) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
});
