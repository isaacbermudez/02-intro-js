//Funciones en JS

const saludar = function  (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

//console.log (saludar('Isaac'));

const getUser = () => {
    return {
        uID: '123',
        username: 'IBS',
    }
};

const getUser2 = () =>  ({
        uID: '123',
        username: 'IBS',
        });

const user = getUser();
        
console.log(user);

//Ejercicio 
//1- Transformar a funcion de fecha
//2- Retornar un objeto implicito 
//3- Pruebas
function getUsuarioActivo(nombre){
return{
    uID: '456',
    username: nombre,
}};

const usuarioActivo = getUsuarioActivo ('Fernando');
console.log(usuarioActivo);


const getUsuarioActivo2 = (nombre) => ({
    uID: '456',
    username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2 ('Isaac');
console.log(usuarioActivo2)



