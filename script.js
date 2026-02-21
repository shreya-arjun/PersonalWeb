document.getElementById("year").textContent = String(new Date().getFullYear());

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((item, index) => {
  item.style.transitionDelay = `${index * 120}ms`;
  observer.observe(item);
});
