let movecount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const page = document.addEventListener('mousemove', (event) => {
        movecount++;
        if (movecount === 10) {
            movecount = 0;
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        }
        if (movecount % 5 === 0) {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            document.body.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
        }
    })
});