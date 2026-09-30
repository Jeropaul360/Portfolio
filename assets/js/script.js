// ===== Mobile menu =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function closeMenu() {
  hamburger?.classList.remove("active");
  navMenu?.classList.remove("active");
}

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close navbar when a link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// ===== Documents dropdown (+) =====
const docDropdown = document.querySelector(".doc-dropdown");
const docToggle = document.getElementById("docToggle");

function setDocMenu(open) {
  docDropdown.classList.toggle("open", open);
  docToggle.setAttribute("aria-expanded", String(open));
}

if (docDropdown && docToggle) {
  docToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    setDocMenu(!docDropdown.classList.contains("open"));
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!docDropdown.contains(e.target)) setDocMenu(false);
  });

  // Close with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setDocMenu(false);
  });

  // Close menus after choosing Resume / Cover Letter
  docDropdown.querySelectorAll(".doc-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      setDocMenu(false);
      closeMenu();
    });
  });
}

// ===== Theme toggle (saved between visits) =====
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (toggleSwitch) toggleSwitch.checked = theme === "dark";
}

function switchTheme(e) {
  const theme = e.target.checked ? "dark" : "light";
  applyTheme(theme);
  localStorage.setItem("theme", theme);
}

toggleSwitch?.addEventListener("change", switchTheme);

const savedTheme = localStorage.getItem("theme");
if (savedTheme) applyTheme(savedTheme);

// ===== Scroll to top =====
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("show", window.scrollY > 300);
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== Footer year =====
const yearEl = document.querySelector("#datee");
if (yearEl) yearEl.textContent = new Date().getFullYear();
