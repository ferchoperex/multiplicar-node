//requireds
const fs = require('fs'); //Propia de node
//const fs = require('express'); //Paquetes de terceros
//const fs = require('./fs'); //Paquetes propios

const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }


        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        console.log('=================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('=================='.green);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}* ${i} = ${base*i}\n`;
        }

        resolve(console.log(data));

    });

};


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}* ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};


module.exports = {
    crearArchivo,
    listarTabla
};