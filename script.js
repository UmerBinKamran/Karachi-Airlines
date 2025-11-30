document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Mobile Menu Toggle Logic ---
  const toggleButton = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobileMenu");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    const icon = toggleButton.querySelector("i");
    if (mobileMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      toggleButton.querySelector("i").classList.remove("fa-times");
      toggleButton.querySelector("i").classList.add("fa-bars");
    });
  });

  // --- 2. Booking Form Logic (One-Way / Round-Trip) ---
  const roundTripRadio = document.getElementById("roundTrip");
  const oneWayRadio = document.getElementById("oneWay");
  const returnDateGroup = document.querySelector(".return-date");
  const returnDateInput = document.getElementById("retDate");

  function toggleReturnDate() {
    if (oneWayRadio.checked) {
      returnDateGroup.classList.add("hidden");
      returnDateInput.removeAttribute("required"); // Remove required for one-way
    } else {
      returnDateGroup.classList.remove("hidden");
      returnDateInput.setAttribute("required", "required"); // Add required for round-trip
    }
  }

  // Initialize state on load
  toggleReturnDate();

  // Attach listeners
  roundTripRadio.addEventListener("change", toggleReturnDate);
  oneWayRadio.addEventListener("change", toggleReturnDate);

  // --- 3. Testimonial Slider Logic ---
  const slider = document.querySelector(".testimonial-slider");
  const slides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;

  function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  // Recalculate slider position on window resize
  window.addEventListener("resize", updateSlider);
});
