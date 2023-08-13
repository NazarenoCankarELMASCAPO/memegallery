canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
document.querySelector(".canvas-container").appendChild(canvas);

canvas.style.margin = "80px auto 40px auto"

loadImg().then(() => {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    let text1 = prompt("Texto 1: ");
    text1 = text1.replace(/\\n/g, '\n');
    
    // Llama a la función splitTextToFitCanvas si el texto es demasiado ancho
    if (ctx.measureText(text1).width > canvas.width / 2) {
        text1 = splitTextToFitCanvas(text1, canvas.width / 2 - 2);
    }

    // Calcula la posición X para que el texto empiece desde la mitad del canvas
    const x1 = canvas.width / 2 + 7; // La mitad del canvas dividida por 2

    // Dibuja el texto en la posición X calculada
    drawWrappedText(ctx, text1, x1, 15, canvas.width / 2 + 15, 30);

    let text2 = prompt("Texto 2: ");
    text2 = text2.replace(/\\n/g, '\n');
    
    // Llama a la función splitTextToFitCanvas si el texto es demasiado ancho
    if (ctx.measureText(text2).width > canvas.width / 2) {
        text2 = splitTextToFitCanvas(text2, canvas.width / 2 - 2);
    }

    // Calcula la posición X para que el texto empiece desde la mitad del canvas
    const x2 = canvas.width / 2 + 7; // La mitad del canvas dividida por 2

    // Dibuja el texto en la posición X calculada
    drawWrappedText(ctx, text2, x2, canvas.height / 2 + 15, canvas.width / 2 + 15, 30);
});

async function loadImg() {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = "./src/img/template-5.jpg";

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            resolve();
        };

        img.onerror = (error) => {
            reject(error);
        };
    });
}

function splitTextToFitCanvas(text, maxWidth) {
    let lines = [];
    let line = '';

    for (const char of text) {
        const testLine = line + char;
        const testWidth = ctx.measureText(testLine).width;

        if (testWidth <= maxWidth) {
            line = testLine;
        } else {
            lines.push(line);
            line = char;
        }
    }
    lines.push(line);

    return lines.join('\n'); // Unir las líneas con saltos de línea
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight) {
    const lines = text.split('\n');
    let yPosition = y;

    for (const line of lines) {
        context.fillText(line, x, yPosition);
        yPosition += lineHeight;
    }
}
