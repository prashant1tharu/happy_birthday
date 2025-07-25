 // === Terminal typing animation ===
    const terminal = document.getElementById("terminal");
    const terminalContainer = document.getElementById("terminal-container");
    const blog = document.getElementById("blog");

    const terminalText = `  
> Booting wishOS v1.0...
> Initializing birthday kernel...
> Target identified: Apsana Dahal (A.k.a Angry Bird)
> Current date: On this Day 4/10.(7/26) 🗓️
> Checking system mood... 🌈 Uplifted
> Compiling joy... ✔Done
> Injecting happiness module... ✔Done
> Deploying virtual cake... 🍰 ✔Done
> Launching smile.exe... 😄 ✔Done
> Generating candles.py... 🔥 ✔Done
> Singing: happy_birthday.mp3 🎶 ✔Done
> Optimizing wish packets... ✨ ✔Done
> Pinging heartbeats... ❤️ ✔Done
> Establishing connection with: Angry Bird 💬
🎉 SYSTEM ANNOUNCEMENT 🎉
Happy Birthday, Apsana Dahal!
Your energy is officially upgraded to version +1, but your charm remains backwards-compatible with every heart.
Here’s your changelog:
- +100 laughter points 😂, +50 kindness boosts 💖, +1 legendary status unlocked 🏆
The world just ran a new update:
> apt install --only-upgrade awesome-human=AngryBird
🎂 Enjoy your day to the fullest, Angry Bird! 🎂  
-- Sent with love by: Prashant 🧠💻`;

    let i = 0;  
    const speed = 30;  

    function typeWriter() {  
      if (i < terminalText.length) {  
        terminal.innerHTML += terminalText.charAt(i);  
        i++;  
        setTimeout(typeWriter, speed);  
      } else {
        // After terminal typing finishes, trigger CRT-style glitch
        setTimeout(() => {
          terminalContainer.classList.add("glitch-out");
          setTimeout(() => {
            terminalContainer.style.display = "none";
            blog.style.display = "block";
          }, 400); // matches glitch duration
        }, 1000);
      }  
    }  

    typeWriter();

    const wishSlider = document.getElementById("wish-slider");
const wishOverlay = document.getElementById("wish-overlay");
const blogContent = document.getElementById("blog");
const showWishBtn = document.getElementById("show-wish-btn");
const closeWishBtn = document.getElementById("close-wish");
const tabs = wishSlider.querySelectorAll(".wish-tab");
let currentTab = 0;

// Show popup and overlay when Surprise 1 clicked
showWishBtn.addEventListener("click", () => {
  wishOverlay.style.display = "block";
  wishSlider.classList.add("active");
  wishSlider.style.bottom = "0";

  // Show first tab
  tabs.forEach(tab => tab.classList.remove("active"));
  tabs[0].classList.add("active");
  currentTab = 0;
});


// Hide popup when overlay or close button clicked
function closePopup() {
  wishSlider.classList.remove("active");
  wishSlider.style.bottom = "-100%";
  wishOverlay.style.display = "none";

  // Show all blog content again
  [...blogContent.children].forEach(child => {
    child.style.display = "";
  });
}
wishOverlay.addEventListener("click", closePopup);
closeWishBtn.addEventListener("click", closePopup);

function nextTab() {
  tabs[currentTab].classList.remove("active");
  currentTab++;
  if (currentTab >= tabs.length) currentTab = 0;
  tabs[currentTab].classList.add("active");
}

function restartTabs() {
  tabs[currentTab].classList.remove("active");
  currentTab = 0;
  tabs[currentTab].classList.add("active");
}
