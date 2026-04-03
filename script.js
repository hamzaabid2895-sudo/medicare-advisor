// ─── PAGE NAVIGATION ───
const pageMap = {
  home: 'page-home',
  about: 'page-about',
  advantage: 'page-advantage',
  medigap: 'page-medigap',
  change: 'page-change',
  sep: 'page-sep',
  contact: 'page-contact',
  privacy: 'page-privacy',
  terms: 'page-terms'
};

const navMap = {
  home: 'nav-home',
  about: 'nav-about',
  advantage: 'nav-advantage',
  medigap: 'nav-medigap',
  change: 'nav-change',
  sep: 'nav-sep',
  contact: 'nav-contact'
};

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById(pageMap[pageId]);
  if (target) target.classList.add('active');
  
  // Also reset form success state if navigating away from contact
  const formSuccess = document.getElementById('form-success');
  if (formSuccess && pageId !== 'contact') formSuccess.style.display = 'none';
  const contactFormEl = document.querySelector('.contact-form');
  if (contactFormEl && pageId !== 'contact') contactFormEl.style.display = '';

  // Update nav active state
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  const navBtn = document.getElementById(navMap[pageId]);
  if (navBtn) navBtn.classList.add('active');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  
  // Update document title and description
  const titles = {
    home: 'Free Medicare Help for Seniors | Compare Plans Today',
    about: 'About Us | Your Trusted Free Medicare Advisors',
    advantage: 'Medicare Advantage Plans Explained | Free Comparison',
    medigap: 'Medigap Plans: Fill the Gaps in Medicare Coverage',
    change: 'How to Change Your Medicare Plan | Free Help',
    sep: 'Medicare Special Enrollment Period | Do You Qualify?',
    contact: 'Contact Us | Free Medicare Help Near You',
    privacy: 'Privacy Policy | MedicareClear Advisory',
    terms: 'Terms and Conditions | MedicareClear Advisory'
  };
  const descriptions = {
    home: 'Confused by Medicare? We make enrollment simple and stress-free. Get free, unbiased help comparing Medicare Advantage, Medigap, and Part D plans near you.',
    about: 'We\'re independent Medicare vendors who work for you, not insurance companies. Our help is always 100% free to seniors. Learn how we make Medicare simple.',
    advantage: 'Learn how Medicare Advantage plans (Part C) bundle hospital, medical, and drug coverage often with added dental, vision, and hearing benefits. Compare for free.',
    medigap: 'Medicare Supplement (Medigap) plans cover the 20% Original Medicare doesn\'t pay. See any Medicare doctor, anywhere. Get free help comparing Medigap plans today.',
    change: 'Want to switch your Medicare plan? Learn when and how you can change Medicare coverage and get free help from a licensed advisor near you.',
    sep: 'Miss Medicare\'s standard enrollment window? A Special Enrollment Period may let you sign up or switch plans without penalty. Get free help from a licensed advisor.',
    contact: 'Have Medicare questions? We\'re here to help for free. Reach our licensed Medicare agent by phone, email, or online form. No pressure. No obligation.',
    privacy: 'Read our Privacy Policy to understand how MedicareClear Advisory collects, uses, and protects your personal information when you visit our website or use our services.',
    terms: 'Read the Terms and Conditions for MedicareClear Advisory\'s website and services. Learn about your rights, our role as a licensed Medicare agent, and how we work together.'
  };

  document.title = titles[pageId] || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', descriptions[pageId] || '');
}

// ─── MOBILE MENU ───
function toggleMobileMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── FAQ ACCORDION ───
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  
  // Close all
  document.querySelectorAll('.faq-toggle').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
  
  // Open clicked (if it wasn't open)
  if (!isOpen) {
    btn.classList.add('open');
    answer.style.display = 'block';
  }
}

// ─── FORM SUBMIT ───
function handleFormSubmit(e) {
  e.preventDefault();
  // Hide the contact form grid section
  const formSection = e.target.closest('.contact-form');
  if (formSection) formSection.style.display = 'none';
  const formSuccess = document.getElementById('form-success');
  if (formSuccess) formSuccess.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── RESPONSIVE: two-col grids handle ───
function handleResize() {
  const twoColGrids = document.querySelectorAll('.two-col-grid');
  twoColGrids.forEach(grid => {
    if (window.innerWidth < 768) {
      grid.style.gridTemplateColumns = '1fr';
    } else {
      grid.style.gridTemplateColumns = '';
    }
  });
}
window.addEventListener('resize', handleResize);
handleResize();

// ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
    e.preventDefault();
  }
});
