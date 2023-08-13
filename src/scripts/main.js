let canvas, ctx

const numElements = 9;
const numRowsCols = Math.ceil(Math.sqrt(numElements));
const gridContainer = document.getElementById("templates-grid");

// Ajusta la cuadrícula debajo del título, utilizando margen superior
gridContainer.style.marginTop = "80px"; // Ajusta este valor según el espacio que quieras dejar debajo del título

for (let i = 1; i <= numElements; i++) {
  const gridItem = document.createElement("div");
  
  const img = document.createElement("img")
  img.memeSelection = i
  img.style.width = "auto"
  img.style.maxWidth = "180px"
  img.style.height = "180px"
  img.style.display = "block"
  img.style.margin = 0
  img.src = `./src/img/template-${i}.jpg`
  img.classList.add("meme")

  gridItem.style.display = "flex"
  gridItem.style.justifyContent = "center"
  gridItem.style.alignItems = "center"
  gridItem.appendChild(img)
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);
}

gridContainer.style.gridTemplateColumns = `repeat(${numRowsCols}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${numRowsCols}, 1fr)`;
gridContainer.style.width = `${numRowsCols * 200 + numRowsCols * 10}px`;
