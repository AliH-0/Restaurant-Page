// src/contact.js
function loadContact() {
    const content = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";

    const contactInfo = document.createElement('p');
    contactInfo.textContent = "Address: 123 Food Street, Flavor Town";
    const phoneInfo = document.createElement('p');
    phoneInfo.textContent = "Phone: (123) 456-7890";

    content.appendChild(heading);
    content.appendChild(contactInfo);
    content.appendChild(phoneInfo);

    return content;
}

export default loadContact;
