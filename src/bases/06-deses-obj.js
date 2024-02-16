//Desestructuracion o Asignacion Desestructurante

const persona = {
    nombre:'Isaac',
    edad: 29,
    pwd:'Test',
    rango: 'Junior',
};

//const { nombre,edad,pwd, } = persona;

//Dconsole.log(nombre);
//Dconsole.log(edad);
//Dconsole.log(pwd);

/* const retornaPersona = (persona) => {
    
    const { nombre,edad,pwd, } = persona;

    console.log(nombre, edad, pwd);
    
};*/

const retornaPersonaPropiedad = ({nombre, pwd, rango = 'Lead'}) => {
   
   //console.log(nombre,pwd,rango);

   return {
        nombrePP: nombre,
        pwdPP:pwd,
        razgos: {
            altura:181,
            peso:88
        }
   }

};

const {nombrePP, pwdPP, razgos: {altura, peso}} =  retornaPersonaPropiedad(persona);

console.log(nombrePP, pwdPP, altura, peso);

