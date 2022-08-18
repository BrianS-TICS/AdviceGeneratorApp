import {consultaApi} from './api.js';

const dado = document.querySelector('#dado');

document.addEventListener('DOMContentLoaded', muestraDatosAPI);
dado.addEventListener('click', muestraDatosAPI);

async function muestraDatosAPI() {
    const pAdvice = document.querySelector('#advice');
    const pTexto = document.querySelector('#texto');

    const datos = await consultaApi();
    const {id,advice} = datos;
    
    pAdvice.textContent = `Advice ${id}`;
    pTexto.textContent = `"${advice}"`;
}