document.addEventListener("DOMContentLoaded", function() {
  const contentDiv = document.getElementById("content");

  const centerContent = document.createElement("div");
  centerContent.className = "center-content";

  const brandDiv = document.createElement("div");
  brandDiv.className = "brand";
  brandDiv.textContent = "DiinoTech";

  const releasingSoonDiv = document.createElement("div");
  releasingSoonDiv.textContent = "Releasing Soon!";

  centerContent.appendChild(brandDiv);
  centerContent.appendChild(releasingSoonDiv);

  contentDiv.appendChild(centerContent);
});
