const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("navmenu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

    // FORM SUBMIT (DOM manipulation)
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  alert("Form Submitted Successfully!");
});

    // SMOOTH SCROLLING
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// CLICK SOUND EFFECT
const clickSound = document.getElementById("click-sound");

document.addEventListener("click", (event) => {
  // Only play when clicking links, buttons, cards, etc.
  if (
    event.target.tagName === "A" ||
    event.target.tagName === "BUTTON" ||
    event.target.classList.contains("clickable") ||
    event.target.parentElement.classList.contains("clickable")
  ) {
    clickSound.currentTime = 0; // restart sound
    clickSound.play();
  }
});

