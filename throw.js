const tipoNumero = (dato) => {
    if (typeof dato !== 'number') 
        throw TypeError('Dato invalido, se esperaba un numero');
    
    console.log(`${ dato } es un numero`);
}

try{
    tipoNumero('12');
} catch ({ message }) {
    console.log(message);
}

