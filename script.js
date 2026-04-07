 // Nav scroll state
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

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

  // Close project modal if clicking outside the content box
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
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