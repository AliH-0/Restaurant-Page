import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";  // Rename 'contact.js' to 'about.js' if it’s the About page

function switchTab(loadTabContent) {
    const content = document.getElementById('content');
    content.innerHTML = '';  // Clear current content
    content.appendChild(loadTabContent());  // Load new content
}

// Initialize page with Home content
switchTab(loadHome);

// Set up event listeners for tab switching
document.getElementById("home-btn").addEventListener("click", () => switchTab(loadHome));
document.getElementById("menu-btn").addEventListener("click", () => switchTab(loadMenu));
document.getElementById("about-btn").addEventListener("click", () => switchTab(loadContact));  // Or loadAbout if renamed
