import { consultaApi } from './api.js';

const dado = document.querySelector('#dado');

setTimeout(() => {
    muestraDatosAPI();
}, 1000);


dado.addEventListener('click', () => {
    const spinnerExistente = document.querySelector('.lds-ripple');
    if (spinnerExistente) {
        spinnerExistente.remove();
    }
    cargarSpinner();
    
    setTimeout(() => {
        muestraDatosAPI();
    }, 1000);
});

async function muestraDatosAPI() {
    const pAdvice = document.querySelector('#advice');
    const pTexto = document.querySelector('#texto');

    const datos = await consultaApi();
    const { id, advice } = datos;

    pAdvice.textContent = `Advice ${id}`;
    pTexto.textContent = `"${advice}"`;
}

function cargarSpinner() {
    const pAdvice = document.querySelector('#advice');
    const pTexto = document.querySelector('#texto');

    pAdvice.textContent = 'Loading...';
    pTexto.textContent = '';

    const spinner = document.createElement('div');
    spinner.innerHTML = `
        <div class="lds-ripple"><div></div><div></div></div>
        `;
    pTexto.appendChild(spinner);


}