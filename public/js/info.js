//-------------------------------------------------------------------
// Entregable 16: Capas
// Fecha de entrega: 04-02-22
// Alumno: Damian del Campo
//-------------------------------------------------------------------

getInfoPage() 

async function getInfoPage() {
    let info = await getInfo()
    const plantillaInfo = await buscarPlantillaInfo()
    const htmlinfo = armarHTMLinfo(plantillaInfo,info)
    document.getElementById('info').innerHTML = htmlinfo
}
function buscarPlantillaInfo() {
    return fetch('/plantillas/info.hbs')
        .then(respuesta => respuesta.text())
}
function getInfo() {
    return fetch('/api/info')
        .then(msjs => msjs.json())
}
function armarHTMLinfo(plantillaInfo,info) {
    const render = Handlebars.compile(plantillaInfo,info);
    const html = render({ info })
   return html
}