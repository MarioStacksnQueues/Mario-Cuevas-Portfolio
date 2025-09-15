// Dark/light toggle
document.querySelector('.mode-toggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  const icon = document.querySelector('.mode-toggle i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Initialize AOS (scroll animations)
AOS.init({
  duration: 800,
  once: true
});

// CountUp counters when scrolled into view
const counters = document.querySelectorAll('.count');
const options = { threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const endVal = +el.dataset.target;
    new CountUp(el, endVal, { duration: 2 }).start();
    observer.unobserve(el);
  });
}, options);

counters.forEach(c => observer.observe(c));
