// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.style.display === "flex";
  navigation.style.display = isOpen ? "none" : "flex";
  menuButton.textContent = isOpen ? "☰" : "✖";
});
