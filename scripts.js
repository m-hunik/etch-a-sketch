const div = document.createElement("div");
div.classList.add("container");

const scriptTag = document.querySelector("script");
document.body.insertBefore(div, scriptTag);

// creates div cells inside div container
for (let i = 0; i < 256; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = i + 1;
  div.appendChild(cell);
}

// adds highlight to a cell when mouseover
const cells = document.querySelectorAll(".container .cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.classList.add("cell-highlight");
  });
});

// cell.addEventListener("mouseout", () => {
//   cell.classList.remove("cell-highlight");
// });
