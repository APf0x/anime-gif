"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demoElement = document.getElementById("demo");
const imgResult = document.querySelector("#imgResult");
const btn = document.querySelector("#suprise-me");
const genres = ["kick", "happy", "wink", "poke", "dance", "cringe"];
btn?.addEventListener("click", generateGif);
function generateGif() {
    const randomGenre = Math.floor(Math.random() * genres.length);
    const url = `https://api.waifu.pics/sfw/${genres[randomGenre]}`;
    fetch(url).then((response) => response.json().then((data) => {
        if (imgResult) {
            imgResult.setAttribute("src", data.url);
        }
    }));
}
//# sourceMappingURL=index.js.map