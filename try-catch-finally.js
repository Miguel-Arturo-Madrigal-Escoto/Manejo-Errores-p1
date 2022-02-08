
try {
    console.log('Ejecutar mi función');
    miFuncion();
} 
catch (error) {
    console.log(`Se ha producido un error: ${ error }`)
} 
finally {
    console.log('Finalización del programa');
}