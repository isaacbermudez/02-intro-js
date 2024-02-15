const nombre = 'Isaac';
const apellido ='Bermudez';

//const nombreCompleto = nombre + ' ' + appellido;
const nombreCompleto = ` ${nombre} ${apellido} `;

console.log(nombreCompleto);

function getSaludo(texto){
    return 'Hola ' + texto;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);