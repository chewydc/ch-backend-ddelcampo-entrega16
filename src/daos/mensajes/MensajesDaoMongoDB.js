//-------------------------------------------------------------------
// Entregable 16: Capas
// Fecha de entrega: 04-02-22
// Alumno: Damian del Campo
//-------------------------------------------------------------------
import ContenedorMongoDB from '../../contenedores/ContenedorMongoDB.js'

class MensajesDaoMongoDB extends ContenedorMongoDB {
    constructor(){
        super("mensajes", {
            author: {type: String, required: false},
            mensaje: {type: String, required: false},
            timestamp: {type: String, required: false},
            id: {type: Number, required: true, unique: true}
        })
    }
}

export default MensajesDaoMongoDB