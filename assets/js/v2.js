const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ─── MOBILE MENU ───
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNav = document.getElementById("mobile-nav");
const mobileOverlay = document.getElementById("mobile-overlay");

function openMenu() {
    hamburgerBtn.classList.add("open");
    mobileNav.classList.add("open");
    mobileOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    hamburgerBtn.classList.remove("open");
    mobileNav.classList.remove("open");
    mobileOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

hamburgerBtn.addEventListener("click", () => {
    mobileNav.classList.contains("open") ? closeMenu() : openMenu();
});

mobileOverlay.addEventListener("click", closeMenu);

mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
    },
);

document.querySelectorAll(".reveal, .reveal-l, .reveal-r").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    revealObserver.observe(el);
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.style.color =
            link.getAttribute("href") === `#${current}` ? "var(--gold)" : "";
    });
});
