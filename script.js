

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the "active" class
});

 //BG VID
 const video = document.getElementById('background-video');

 // Wait for the video to load metadata
 video.addEventListener('loadedmetadata', () => {
     video.playbackRate = 1; // Set normal playback initially
     video.currentTime = 0; // Start from the beginning
     playForward();
 });
 
 // Function to play the video forward
 function playForward() {
     video.playbackRate = 1;
     video.play();
     video.onended = playReverse; // On end, play in reverse
 }
 
 // Function to play the video backward
 function playReverse() {
     video.pause();
     let reverseInterval = setInterval(() => {
         video.currentTime -= 0.033; // Go backward (about 30 fps)
 
         if (video.currentTime <= 0) {
             clearInterval(reverseInterval); // Stop the interval
             playForward(); // Restart forward playback
         }
     }, 33);
 }
 

// Get all slides
const slides = document.querySelectorAll('.slide');

// Initialize the current slide index
let currentSlideIndex = 0;

// Function to update the active slide
function updateActiveSlide() {
    // Remove the 'active' class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Add the 'active' class to the current slide
    slides[currentSlideIndex].classList.add('active');
}

// Function to go to the previous slide
function prevSlide() {
    // Decrement the slide index and loop back if necessary
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateActiveSlide();
}

// Function to go to the next slide
function nextSlide() {
    // Increment the slide index and loop back if necessary
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateActiveSlide();
}

// Add click events to slides for direct selection
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentSlideIndex = index;
        updateActiveSlide();
    });
});

// Set the first slide as active on page load
updateActiveSlide();

// Copy email
  
  const email = "dobaochau040905@gmail.com";
  const copyBtn = document.querySelector(".copy-email");
  const tooltip = copyBtn.querySelector(".tooltip");

  let hideTimeout;

  function showTooltip(text) {
    tooltip.textContent = text;
    copyBtn.classList.add("show-tooltip");

    clearTimeout(hideTimeout);
  }

  function hideTooltip(delay = 0) {
    hideTimeout = setTimeout(() => {
      copyBtn.classList.remove("show-tooltip");
    }, delay);
  }

  // Hover: show "Click to copy"
  copyBtn.addEventListener("mouseenter", () => {
    showTooltip("Click to copy");
  });

  copyBtn.addEventListener("mouseleave", () => {
    hideTooltip(200);
  });

  // Click: copy + show confirmation
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(email).then(() => {
      showTooltip("Copied to clipboard");
      hideTooltip(1500);
    });
  });

  // Keyboard accessibility
  copyBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        showTooltip("Copied to clipboard");
        hideTooltip(1500);
      });
    }
  });