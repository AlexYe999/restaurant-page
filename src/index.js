import "./styles.css"
import { loadHome, loadMenu, loadAbout } from "./pages.js";

let currState = "home";
loadHome();

document.querySelector("#home").onclick = () => {
    if (currState === "home") return;
    currState = "home";
    const content = document.querySelector("#content");
    while (content.firstChild) content.firstChild.remove();
    loadHome();
}

document.querySelector("#menu").onclick = () => {
    if (currState === "menu") return;
    currState = "menu";
    const content = document.querySelector("#content");
    while (content.firstChild) content.firstChild.remove();
    loadMenu();
}

document.querySelector("#about").onclick = () => {
    if (currState === "about") return;
    currState = "about";
    const content = document.querySelector("#content");
    while (content.firstChild) content.firstChild.remove();
    loadAbout();
}