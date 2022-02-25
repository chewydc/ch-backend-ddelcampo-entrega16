//-------------------------------------------------------------------
// Entregable 16: Capas
// Fecha de entrega: 04-02-22
// Alumno: Damian del Campo
//-------------------------------------------------------------------
import ContenedorFirebase from '../../contenedores/ContenedorFirebase.js'

class ProductosDaoFirebase extends ContenedorFirebase {
    constructor(){
        super('productos')
    }
}

export default ProductosDaoFirebase