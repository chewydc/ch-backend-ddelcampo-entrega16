//-------------------------------------------------------------------
// Entregable 16: Capas
// Fecha de entrega: 04-02-22
// Alumno: Damian del Campo
//-------------------------------------------------------------------
import ContenedorArchivo from '../../contenedores/ContenedorArchivo.js'
import {default as config} from '../../config.js'

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor(){
        super(`${config.fileSystem.path}/productos.json`)
    }
}

export default ProductosDaoArchivo