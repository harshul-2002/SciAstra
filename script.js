const toggleButton = document.getElementById("toggleButton");
const navList = document.getElementById("navList");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navList.classList.toggle("active");
});




