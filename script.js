// Script untuk form kontak
document.getElementById('formKontak').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    this.reset();
  });
  
  // Script untuk slider layanan
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.services-slider');
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.service-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    function updateSlider() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    // Next slide
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlider();
    });
    
    // Previous slide
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlider();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
    
    // Auto slide (optional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlider();
    }, 5000);
  });