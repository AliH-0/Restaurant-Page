import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

import restImage from './images/rest.png';

const imgElement = document.createElement('img');
imgElement.src = restImage;
imgElement.alt = "A beautiful view of our restaurant";
document.getElementById('content').appendChild(imgElement);
