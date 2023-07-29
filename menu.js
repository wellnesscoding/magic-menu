const icons = document.querySelectorAll('.magic-list');

function activeIcon() {
  icons.forEach((icons) => icons.classList.remove("active"));
  this.classList.add("active");
}

icons.forEach((icons) => icons.addEventListener("click", activeIcon));
