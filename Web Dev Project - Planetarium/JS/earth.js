// fade in animation
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
    });
});

faders.forEach(el => observer.observe(el));


// Navbar scroll effect 
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.9)";
    } else {
        nav.style.background = "rgba(0,0,0,0.7)";
    }
});
// end of code