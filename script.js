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
  
  // Update nav active state
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  const navBtn = document.getElementById(navMap[pageId]);
  if (navBtn) navBtn.classList.add('active');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  
  // Update document title
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
  document.title = titles[pageId] || document.title;
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
  const formSection = e.target.closest('section');
  formSection.style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
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
