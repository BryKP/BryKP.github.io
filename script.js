const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

noBtn.addEventListener("click", () => {
    question.innerHTML = "I love you too!!!sono stupido lo so";
    gif.src = "https://i.pinimg.com/originals/fd/47/e5/fd47e55dfb49ae1d39675d6eff34a729.gif" 
});

yesBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    yesBtn.style.left = randomX + "px ";
    yesBtn.style.top = randomY + "px ";
});