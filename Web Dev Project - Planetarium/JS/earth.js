// fade in animation
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
    });
});

faders.forEach(el => observer.observe(el));


// navigation bar scroll effect 
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.9)";
    } else {
        nav.style.background = "rgba(0,0,0,0.7)";
    }
});


// slideshow 
const slides = document.querySelectorAll(".slide");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const duration = 4000;
let interval;


function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

// progress bar
function startProgress() {
    progress.style.transition = "none";
    progress.style.width = "0%";

    setTimeout(() => {
        progress.style.transition = `width ${duration}ms linear`;
        progress.style.width = "100%";
    }, 50);
}

// forward and backward
function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
    startProgress();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
    startProgress();
}

// reset auto loop when user clicks
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, duration);
}


nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
});


showSlide(index);
startProgress();
interval = setInterval(nextSlide, duration);
// end of code