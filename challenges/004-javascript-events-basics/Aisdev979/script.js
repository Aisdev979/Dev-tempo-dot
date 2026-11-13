// DOM Elements
const quoteDisplay = document.querySelector("#paragraph");
const pageBody = document.body;
const cycleThemeButton = document.querySelector("#btn");

// Configuration Data
const backgroundColors = [
  "#FF5733", // Vibrant Coral
  "#33FF57", // Neon Lime
  "#3357FF", // Electric Blue
  "#F333FF", // Hot Magenta
  "#33FFF5", // Bright Cyan
  "#FFD700", // Gold
  "#FF69B4", // Hot Pink
  "#8A2BE2", // Blue Violet
  "#00FA9A", // Medium Spring Green
  "#FF4500"  // Orange Red
];

const comedicQuotes = [
    "I put the 'pro' in procrastinate.",
    "404: Motivation not found.",
    "I’m not lazy, I’m on energy-saving mode.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "I followed my heart, and it led me to the fridge.",
    "Error 418: I'm a teapot.",
    "I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.",
    "Common sense is like deodorant. The people who need it most never use it.",
    "I’m silently correcting your grammar.",
    "Loading witty remark... please wait."
];

// Track postion/state on each click for reference.
let currentItemIndex = 0;
let hasShownWelcome = false;

// Event Handler
function handleThemeCycle(event) {
  event.preventDefault();

  /*
    check if alert has been displayed previously so has not to repeatedly display it.
  */
  if (!hasShownWelcome) {
    alert("Welcome to Changer Change 🤗");
    hasShownWelcome = true;
  }

  // Apply the current color and quote
  pageBody.style.backgroundColor = backgroundColors[currentItemIndex];
  quoteDisplay.textContent = comedicQuotes[currentItemIndex];
  
  // Advance to the next index, wrapping back to 0 at the end
  currentItemIndex = (currentItemIndex + 1) % backgroundColors.length;
}

  /*
   display the changes when button is clicked
  */
  cycleThemeButton.addEventListener("click", handleThemeCycle);
