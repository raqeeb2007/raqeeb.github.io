// fade in contents
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

faders.forEach(el => observer.observe(el));

// navigation scroll effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (nav) {
        nav.style.background = window.scrollY > 50 
            ? "rgba(0, 0, 0, 0.9)" 
            : "rgba(0, 0, 0, 0.7)";
    }
});

// slideshow functions
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
});

setInterval(() => {
    nextBtn.click();
}, 5000);