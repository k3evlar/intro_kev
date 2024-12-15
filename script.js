const matrix = document.getElementById('matrix');
const columns = Math.floor(window.innerWidth / 20);
const drops = Array(columns).fill(1);

function drawMatrix() {
    matrix.innerHTML = '';
    drops.forEach((y, x) => {
        const text = document.createElement('span');
        text.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
        text.style.left = `${x * 20}px`;
        text.style.top = `${y * 20}px`;
        matrix.appendChild(text);
        drops[x] = y > window.innerHeight / 20 || Math.random() > 0.95 ? 0 : y + 1;
    });
}

setInterval(drawMatrix, 50);
