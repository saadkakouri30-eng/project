const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.querySelector(".midle-side ul");

if (burgerBtn && navMenu) {
  burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  item.addEventListener("click", function () {
    if (window.innerWidth < 1024) {
      item.classList.toggle("active");
    }
  });
});

// DARK MODE TOGGLE
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  if (themeToggle) {
    themeToggle.textContent = "☀️";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });
}