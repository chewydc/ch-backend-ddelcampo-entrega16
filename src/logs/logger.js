//-------------------------------------------------------------------
// Entregable 16: Capas
// Fecha de entrega: 04-02-22
// Alumno: Damian del Campo
//-------------------------------------------------------------------
import fs from 'fs';
import pinoms from 'pino-multi-stream';

let  prettyStream = pinoms.prettyStream()
let streams = [
    {stream: prettyStream },
    {level: 'warn', stream: fs.createWriteStream('./src/logs/warn.log') },
    {level: 'error', stream: fs.createWriteStream('./src/logs/error.log') },
    {level: 'fatal', stream: fs.createWriteStream('./src/logs/error.log') }
]
let logger = pinoms({streams: streams})
export default logger
