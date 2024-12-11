const keys = document.querySelectorAll(".key");
const audio = new Audio();

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();
};

keys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});