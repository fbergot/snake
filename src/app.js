import "./assets/CSS/style.css";
import Snake from "./class/Test";
import Apple from "./assets/picture/apple.png";

const para = document.querySelector("p");

const appleIcon = new Image();
appleIcon.src = Apple;

para.appendChild(appleIcon);
