document.addEventListener("DOMContentLoaded", () => {
  // ======== FAQ EXPAND/COLLAPSE WITH SMOOTH ANIMATION ==========
  const faqBoxes = document.querySelectorAll(".faqbox");

  faqBoxes.forEach((box) => {
    const question = box.querySelector("span");
    const icon = box.querySelector("svg");

    const answer = document.createElement("div");
    answer.classList.add("faq-answer");
    answer.innerHTML = getFAQAnswer(question.textContent.trim());
    box.appendChild(answer);

    answer.style.maxHeight = "0";
    answer.style.overflow = "hidden";
    answer.style.transition = "max-height 0.4s ease, padding 0.4s ease";
    answer.style.paddingTop = "0";
    answer.style.color = "#ccc";
    answer.style.fontSize = "18px";
    answer.style.textAlign = "left";

    box.addEventListener("click", () => {
      const isOpen = box.classList.toggle("open");
      if (isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingTop = "12px";
        icon.style.transform = "rotate(45deg)";
      } else {
        answer.style.maxHeight = "0";
        answer.style.paddingTop = "0";
        icon.style.transform = "rotate(0deg)";
      }
      icon.style.transition = "transform 0.3s ease";
    });
  });

  // ======== EMAIL VALIDATION ==========
  const emailInput = document.querySelector(".hero input");
  const startButton = document.querySelector(".hero .btn");

  startButton.addEventListener("click", () => {
    const email = emailInput.value.trim();
    if (email === "") {
      alert("Please enter your email address to get started.");
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Welcome to Netflix Clone!\nYour email: ${email}`);
      emailInput.value = "";
    }
  });

  // ======== SIGN IN BUTTON ==========
  const signInButton = document.querySelector(".btn-top");
  signInButton.addEventListener("click", () => {
    alert("Sign-in functionality coming soon!");
  });

  // ======== LANGUAGE DROPDOWN FUNCTIONALITY ==========
  const langButton = document.querySelector(".btnt");

  // Create dropdown menu
  const dropdown = document.createElement("div");
  dropdown.classList.add("lang-dropdown");
  dropdown.innerHTML = `
    <div class="lang-option">English</div>
    <div class="lang-option">বাংলা</div>
  `;
  langButton.parentElement.appendChild(dropdown);

  dropdown.style.display = "none";

  // Toggle dropdown on click
  langButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = dropdown.style.display === "block";
    dropdown.style.display = isVisible ? "none" : "block";

    // Rotate arrow
    const arrow = langButton.querySelector(".down-arrow");
    arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(90deg)";
    arrow.style.transition = "transform 0.3s ease";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!langButton.contains(e.target)) {
      dropdown.style.display = "none";
      const arrow = langButton.querySelector(".down-arrow");
      arrow.style.transform = "rotate(0deg)";
    }
  });

  // Handle language selection
  dropdown.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", () => {
      langButton.childNodes[1].nodeValue = ` ${option.textContent} `;
      dropdown.style.display = "none";
      const arrow = langButton.querySelector(".down-arrow");
      arrow.style.transform = "rotate(0deg)";
      alert(`Language changed to: ${option.textContent}`);
    });
  });
});

// Helper function for FAQ answers
function getFAQAnswer(question) {
  switch (question) {
    case "What is Netflix?":
      return "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more. In short : Netflix = an online platform for on-demand entertainment.";
    case "How much does Netflix cost?":
      return "Plans start at ₹149 per month. Watch on your smartphone, tablet, or TV.";
    case "Where can I watch?":
      return "Watch anywhere — on your phone, tablet, laptop, or TV with the Netflix app.";
    case "How do I cancel?":
      return "You can cancel your membership anytime from your account settings. No cancellation fees.";
    case "What can I watch on Netflix?":
      return "Netflix has a huge library of TV shows, movies, documentaries, and Netflix Originals.";
    case "Is Netflix good for kids?":
      return "Yes! Kids profiles include family-friendly shows in a safe viewing space.";
    default:
      return "";
  }
}
