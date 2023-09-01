class Mark {
    constructor(width, height, color, text) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.text = text;
        this.manageHTML();
    }

    manageHTML() {
        const mark = document.createElement("div");
        mark.className = `mark ${this.color}`;
        mark.dataset.state = "disactive";
        mark.innerHTML = `
        <img src="/plus.svg" alt="плюс" class = "plus" /> 
        <img src="/minus.svg" alt="минус" class = "minus none"/>
        <span class="text none">${this.text}</span>`;
        mark.style.left = `${this.width}%`;
        mark.style.top = `${this.height}%`;
        mark.dataset.color = this.color;
        mark.dataset[this.color] = "disactive";
        const app = document.getElementById("app");
        app.append(mark);
    }
}

new Mark(30, 26, "blue", "здание 1");
new Mark(36, 45, "green", "стадион");
new Mark(23, 67, "blue", "здание 3");
new Mark(21, 106, "green", "здание 4");
new Mark(57, 59, "blue", "здание 5");
new Mark(58, 74, "green", "здание 6");
new Mark(72, 21, "blue", "здание 7");
new Mark(74, 44, "blue", "здание 8");
new Mark(83, 67, "blue", "здание 9");
new Mark(68, 62, "green", "здание 10");

function clickHandler(event) {
    const target = event.target.closest(".mark");
    if (target) {
        const color = target.dataset.color;
        const state =
            target.dataset.state === "disactive" ? "active" : "disactive";
        target.dataset.state = state;
        target.dataset[color] = state;
    } else {
        const targets = Array.from(document.querySelectorAll(".mark"));
        targets.forEach((target) => {
            const color = target.dataset.color;
            target.dataset.state = "disactive";
            target.dataset[color] = "disactive";
        });
    }
}
document.addEventListener("click", clickHandler);
