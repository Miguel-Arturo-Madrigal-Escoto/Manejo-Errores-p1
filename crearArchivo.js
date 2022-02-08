const fs = require('fs');

const archivoFuncion = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('archivo.txt',  'Miguel Madrigal', err => {
            if (err) {
                reject(`Ha ocurrido un error: ${ err }`);
            }

            resolve(`Se ha escrito correctamente en el archivo`)
        });
    });
}

archivoFuncion()
    .then(msg => console.log(msg))
    .catch(err => console.log(err));