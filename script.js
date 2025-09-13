// Select all filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
// Select all project cards
const projectCards = document.querySelectorAll(".project-card");

// Add click event for each filter button
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove 'active' from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    // Add 'active' to clicked button
    button.classList.add("active");

    // Get filter value
    const filterValue = button.getAttribute("data-filter");

    // Loop through all project cards
    projectCards.forEach(card => {
      if (filterValue === "all" || card.classList.contains(filterValue)) {
        card.style.display = "block"; // Show card
      } else {
        card.style.display = "none"; // Hide card
      }
    });
  });
});


