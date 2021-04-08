//animação maquina de escrever
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 90 * i);
    });
}
const titulo = document.querySelector('h3');
typeWriter(titulo);

// animação da foto conhecimentos
type = 'text/javascript' > document.addEventListener('DOMContentLoaded',
    function () { window.setTimeout(document.querySelector('svg').classList.add('animated'), 1000); });

