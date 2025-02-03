const div = document.createElement("div");
div.classList.add("container");

const scriptTag = document.querySelector("script");
document.body.insertBefore(div, scriptTag);

for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = i + 1;
  div.appendChild(cell);
}
