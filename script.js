document.getElementById("year").textContent = String(new Date().getFullYear());

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
);

reveals.forEach((item, index) => {
  item.style.transitionDelay = `${index * 130}ms`;
  observer.observe(item);
});

const cards = document.querySelectorAll(".project-card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const bounds = card.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const deltaX = (event.clientX - centerX) / 28;
    const deltaY = (event.clientY - centerY) / 28;
    card.style.transform = `translateY(-5px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
