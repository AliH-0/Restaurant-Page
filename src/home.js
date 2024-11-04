// src/home.js
import restImage from './images/rest.png'; // Import the image

function loadHome() {
    const content = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Our Restaurant";

    const imgElement = document.createElement('img');
    imgElement.src = restImage; // Set the src to the imported image
    imgElement.alt = "A beautiful view of our restaurant"; // Alt text for the image

    const description = document.createElement('p');
    description.textContent = "Experience the best dining experience in town. We offer an exquisite menu filled with delicious options for every taste.";

    content.appendChild(heading);
    content.appendChild(imgElement);
    content.appendChild(description);

    return content;
}

export default loadHome;
