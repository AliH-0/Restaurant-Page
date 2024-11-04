// src/menu.js
function loadMenu() {
    const content = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "Our Menu";

    const menuList = document.createElement('ul');
    const items = ["Spaghetti", "Pizza", "Salad", "Soup"];
    items.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        menuList.appendChild(menuItem);
    });

    content.appendChild(heading);
    content.appendChild(menuList);

    return content;
}

export default loadMenu;
