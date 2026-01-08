// I toggle light/dark mode and swap the icon when the user clicks the button
// I toggle light/dark mode and swap the icon when the user clicks the button
const toggleBtn = document.querySelector('.mode-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    const icon = toggleBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });
}


// I initialize AOS to enable scroll animations used on elements with data-aos
AOS.init({
  duration: 800,
  once: true
});

// I animate the numeric counters when they scroll into view using IntersectionObserver + CountUp
const counters = document.querySelectorAll('.count');
const options = { threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return; // wait until the element is visible
    const el = entry.target;
    const endVal = +el.dataset.target; // read the target value from data-target
    new CountUp(el, endVal, { duration: 2 }).start();
    observer.unobserve(el); // run once per element
  });
}, options);

counters.forEach(c => observer.observe(c));
