var colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, listar=false,hasta=10) => {
    try {
       
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i}=${base * i}\n`;
        }
        if(listar){
            console.log(salida.bgBlue);

        }    
     
        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            return `tabla-${base}.txt`;
        })
    } catch (err) {

        throw err
    }


}

module.exports = {
    crearArchivo
}