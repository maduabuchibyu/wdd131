document.addEventListener("DOMContentLoaded", () => {
  // Get stored count or start at 0
  let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
  
  // Increment count
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);

  // Display counter
  document.getElementById("counter").textContent = 
    `You have submitted ${reviewCount} review(s).`;
});
