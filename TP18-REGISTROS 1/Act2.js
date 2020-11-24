const notebook_datos = (sku,marca,procesador,ram,disco,typedisk,resolucion,perifericos,precio) =>{
return {
    sku,
    marca,
    procesador,
    ram,
    disco,
    typedisk,
    resolucion,
    perifericos,
    precio
}
}
let datos = notebook_datos('ab001','acer','Intel','16gb','1tb','SSD','19 pulgadas','teclado y mouse','19500')
console.log(datos);