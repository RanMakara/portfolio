// Initialize AOS animations
AOS.init({ once:true });

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Typing Effect
const typingText = ["Front-End Developer", "RaSmosSne", "Cybersecurity", "Web Enthusiast"];
let index = 0, charIndex = 0, currentText = "", isDeleting = false;
const typing = document.getElementById("typing");
function type() {
  if(index >= typingText.length) index = 0;
  const fullText = typingText[index];
  if(isDeleting) { currentText = fullText.substring(0, charIndex--); }
  else { currentText = fullText.substring(0, charIndex++); }
  typing.textContent = currentText;
  if(!isDeleting && charIndex === fullText.length){ isDeleting = true; setTimeout(type, 1000); }
  else if(isDeleting && charIndex === 0){ isDeleting = false; index++; setTimeout(type, 500); }
  else setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Progress bars animation
const progressBars = document.querySelectorAll('.progress');

function showProgress() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-skill');
    const pos = bar.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if(pos < screenHeight - 100) {
      bar.style.width = value + '%';
    }
  });
}

window.addEventListener('scroll', showProgress);
window.addEventListener('load', showProgress);

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "Light Mode";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});