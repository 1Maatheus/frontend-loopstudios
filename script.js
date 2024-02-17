let toggleBtn = document.getElementById("btn-mobile");

function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  const hamburger = document.getElementById("hamburger");
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
}

toggleBtn.addEventListener("click", toggleMenu);
