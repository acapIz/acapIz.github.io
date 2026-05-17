 // Nav scroll state
  const nav = document.getElementById('nav');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
     });
      ticking = true;
    }
  }, { passive: true }); // 'passive' tells the phone it can scroll smoothly without waiting for JS

  // --- Modal Logic (UPDATED FOR MULTIPLE MODALS) ---
  let currentModal = null;

  function openProjectModal(modalId) {
    currentModal = document.getElementById(modalId);
    if (currentModal) {
      currentModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }

  function closeProjectModal() {
    if (currentModal) {
      currentModal.classList.remove('active');
      currentModal = null;
    }
    document.body.style.overflow = ''; // Restore background scrolling
  }

  // A single listener handles all modal overlay clicks instantly
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeProjectModal();
  }
});

  // --- Lightbox Logic ---
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');

  function openLightbox(imgSrc) {
    lightboxImg.src = imgSrc;
    lightboxModal.classList.add('active');
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    // Clear src after transition to prevent ghosting on next open
    setTimeout(() => { lightboxImg.src = ""; }, 300);
  }