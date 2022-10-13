import message from "./state.js";

var counter = 0;

function changeFirst(content) {
    var container = document.querySelector(".content .first");
    if (container && counter % 2 !== 0) container.textContent = "first " + content
}

function changeSecond(content) {
    var container = document.querySelector(".content .second");
    if (container && counter % 2 === 0) container.textContent = "second " + content
}

changeFirst(message.value);
changeSecond(message.value);
message.subscribe(changeFirst);
message.subscribe(changeSecond);

var button_trigger = document.querySelector("button.btn");
if (button_trigger) {
    button_trigger.addEventListener("click", () => {
        counter++;
        message.dispatch(`Pesan awal dari thoni ${counter}`);
    })
}