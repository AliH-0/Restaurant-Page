// src/pageLoad.js
import restImage from './images/rest.png';

function loadHomePage() {
    const content = document.getElementById('content');

    // Create elements
    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Our Restaurant";

    const imgElement = document.createElement('img');
    imgElement.src = restImage;
    imgElement.alt = "A beautiful view of our restaurant";

    const description = document.createElement('p');
    description.textContent = "Experience the best dining experience in town. We offer an exquisite menu filled with delicious options for every taste. Come dine with us and see why we're the best!";

    // Append elements to content div
    content.appendChild(heading);
    content.appendChild(imgElement);
    content.appendChild(description);
}

export default loadHomePage;
