const notebook_datos = (sku, marca, procesador, ram, disco, typedisk, resolucion, lectoraGrabadora, precio) => {
    return {
        sku,
        marca,
        procesador,
        ram,
        disco,
        typedisk,
        resolucion,
        lectoraGrabadora,
        precio
    }
}
let datos = notebook_datos('ab001', 'acer', 'Intel', '16gb', '1tb', 'SSD', '19 pulgadas', false, '19500')

let listNotebook = []

listNotebook.push(notebook_datos('ab001', 'acer', 'Intel', '16gb', '1tb', 'SSD', '19 pulgadas', true, 9000))
listNotebook.push(notebook_datos('ab002', 'Dell', 'AMD', '4gb', '500gb', 'HDD', '17 pulgadas', false, 20877))
listNotebook.push(notebook_datos('ab003', 'Asus', 'Intel', '8gb', '290gb', 'SSD', '14 pulgadas', true, 39800))

const filtro = (listNotebook) => {
    for (let i = 0; i < listNotebook.length; i++) {
        if ((listNotebook[i]['lectoraGrabadora'] == true) && (listNotebook[i]['precio'] < 10000)) {
            return console.log(listNotebook[i]);
        }

    }
}
filtro(listNotebook)