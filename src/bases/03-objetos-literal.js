const persona = {
    nombre: 'Isaac',
    apellidos:'Bermudez',
    edad:'29',
    direccion: {
        ciudad:'Heredia',
        zipCode:'40209',
        lat:'000',
        long:'0000',
    }
};

//console.table( persona );
console.log( persona );

const persona2 = {...persona};

persona2.nombre = 'Isaac2';

console.log( persona2 );