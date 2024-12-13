//Variaveis e constantes
const keys = document.querySelectorAll(".key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
const audio = new Audio();
let mapedKeys = [];

//Funcao que emite o som da tecla
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => clickedKey.classList.remove("active"), 150);
};

//Adiciona o Event Listener nas teclas virtuais e nas do teclado
keys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});
document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)) playTune(e.key);
});

//Altera o volume
const handleVolume = (volume) => {
    audio.volume = volume;
}
volumeSlider.addEventListener("input", (e) => handleVolume(e.target.value));

//Mostra e esconde as teclas
const showKeys = () => document.querySelector(".piano-keys").classList.toggle("hide");
keysCheck.addEventListener("click", showKeys);
