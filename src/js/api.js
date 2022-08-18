export async function consultaApi(){
    const url = 'https://api.adviceslip.com/advice';
    
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.slip;
    } catch (error) {
        console.log(error);
    }

}