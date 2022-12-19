const btnGreen = document.getElementById('btn-green');
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
const btnOrange = document.getElementById('btn-orange');

btnGreen.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
    const txt = document.getElementById('txt-content');
    
    txt.style.color = '#fff';
    txt.style.fontSize = 'x-large';

    const reset = document.getElementById('heading');
    reset.textContent = 'reset to default';
    reset.style.cursor = 'pointer';

    reset.addEventListener('click', () => {
        const heading = document.getElementById("heading");
        heading.style.cursor = "default";
        heading.textContent = "select a color";
        document.body.style.backgroundColor = '#fff';
    });
});

btnRed.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    const txt = document.getElementById('txt-content');

    txt.style.color = '#fff';
    txt.style.fontSize = 'x-large';

    const reset = document.getElementById('heading');
    reset.textContent = 'reset to default';
    reset.style.cursor = 'pointer';

    reset.addEventListener('click', () => {
        const heading = document.getElementById('heading');
        heading.style.cursor = 'default';
        heading.textContent = 'select a color';
        document.body.style.backgroundColor = '#fff';
    });
});

btnBlue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
    const txt = document.getElementById('txt-content');

    txt.style.color = '#fff';
    txt.style.fontSize = 'x-large';

    const reset = document.getElementById('heading');
    reset.textContent = 'reset to default';
    reset.style.cursor = 'pointer';

    reset.addEventListener('click', () => {
        const heading = document.getElementById('heading');
        heading.style.cursor = 'default';
        heading.textContent = 'select a color';
        document.body.style.backgroundColor = '#fff';
    });
});

btnOrange.addEventListener('click', () => {
    document.body.style.backgroundColor = 'orange';
    const txt = document.getElementById('txt-content');

    txt.style.color = '#fff';
    txt.style.fontSize = 'x-large';

    const reset = document.getElementById('heading');
    reset.textContent = 'reset to default';
    reset.style.cursor = 'pointer';

    reset.addEventListener('click', () => {
        const txt = document.getElementById('heading');
        heading.style.cursor = 'default';
        heading.textContent = 'select a color';
        document.body.style.backgroundColor = '#fff';
    });
});