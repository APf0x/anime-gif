document.getElementById("demo");
const imgResult = document.querySelector("#imgResult");
const btn = document.querySelector("#suprise-me");
const genres = ["kick", "happy", "wink", "poke", "dance", "cringe"];
btn.addEventListener("click", generateGif);
function generateGif() {
  let randomGenre = Math.floor(Math.random() * genres.length);
  let url = `https://api.waifu.pics/sfw/${genres[randomGenre]}`;

  fetch(url).then((reponse) =>
    reponse.json().then((data) => {
      imgResult.setAttribute("src", data.url);
    })
  );
}
