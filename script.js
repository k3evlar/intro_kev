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
[_{{{CITATION{{{_1{](https://github.com/john1234-oladipo/rgusports/tree/3cc5107f33a8a8b876783f229ccc51ac8391ff0a/students%2Fview-final-selection.php)[_{{{CITATION{{{_2{](https://github.com/Xuhy0826/Go-Go-Study/tree/ebd737e7e613e45ec6b48aeae27dfdc062d8811d/lesson33%EF%BC%9AGo%E5%BC%80%E5%8F%91Web%E5%BA%94%E7%94%A8%E5%85%A5%E9%97%A8%EF%BC%883%EF%BC%89%E6%A8%A1%E6%9D%BF%2Fnote.md)[_{{{CITATION{{{_3{](https://github.com/buribalazs/smooth-drag-order/tree/7b40d21d076c3e31765f61481f537beaf4c5ec9f/README.md)[_{{{CITATION{{{_4{](https://github.com/fear-the-lord/Souvik-Portfolio-Website/tree/a7656115c14bc880c3d52fee2d70c14c5ed9843c/contact.php)
