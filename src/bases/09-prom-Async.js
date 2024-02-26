import { getHeroeById } from './bases/08-imp-exp';

/* const promesa = new Promise((resolve, reject)=> {

    setTimeout(() => {

        const heroe = getHeroeById (2);

        resolve(heroe);
        
    }, 2000);
    
}) ;

promesa.then((something)=>{

    console.log('heroe', something);

}) 

.catch( err => console.warn(err));
 */
const getHeroeByIdAsync = (id) => {
   
    return new Promise((resolve, reject)=> {

        setTimeout(() => {
    
            const heroe = getHeroeById (id);
    
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
            
        }, 2000);
        
    }) ;

};
 
getHeroeByIdAsync(4)

    .then (console.log)
    .catch(console.warn)
;