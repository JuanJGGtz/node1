import { writeFile } from 'node:fs';

export const crearArchivoTablaMultiplicar = (base = 5) => {

    let salida = "";
    for (let index = 1; index <= 10; index++) {
        salida += `${base} * ${index} : ${base * index}\n`;
    }

    writeFile('message.txt', salida, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}