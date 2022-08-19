import { consultaApi } from './api.js';

const dado = document.querySelector('#dado');

setTimeout(() => {
    muestraDatosAPI();
}, 1000);


dado.addEventListener('click', () => {
    cargarSpinner();
    
    setTimeout(() => {
        muestraDatosAPI();
    }, 1000);
});

async function muestraDatosAPI() {
    const spinnerExistente = document.querySelector('.lds-ripple');
    const pAdvice = document.querySelector('#advice');
    const pTexto = document.querySelector('#texto');

    
    const datos = await consultaApi();
    const { id, advice } = datos;
    
    if (spinnerExistente) {
        spinnerExistente.remove();
    }
    
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