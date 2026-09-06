const element = document.querySelector("#first-line");
const finalText = element.textContent;
const junk = "!<>-_\\/[]{}—=+*^?#";

let frame = 0;
const speed = 2; // higher = slower reveal

const timer = setInterval(() => {
    let output = "";

    for (let i = 0; i < finalText.length; i++) {
        if (i < frame / speed) {
            output += finalText[i];
        } else {
            output += junk[Math.floor(Math.random() * junk.length)];
        }
    }

    element.textContent = output;
    frame++;

    if (frame / speed > finalText.length) {
        clearInterval(timer);
        element.textContent = finalText;
    }
}, 40);