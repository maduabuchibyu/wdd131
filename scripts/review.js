// Review counter using localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

// Display total reviews
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#reviewCounter").textContent = 
    `You have submitted ${reviewCount} review(s) so far.`;
});
