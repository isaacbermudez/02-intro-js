const personajes = ['Isaac', 'Hazel','Bela'];

const [ , , pers ] = personajes;

//console.log(pers);

const retornaArreglo = ()=>{
    return ['ABC',123];
}

const  [letras, numeros] = retornaArreglo();

//console.log(letras, numeros);

//Ejercicio 
//1- Primer valor del arreglo 'ejercicio' se llamara nombre
//2- Segundo valor del arreglo 'ejercicio'  se llamara setNombre
const ejercicio = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}
const [nombre, setNombre] = ejercicio ('Isaac');
console.log(nombre);
setNombre();
