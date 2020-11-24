/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
const vocales = (cadena = undefined) => {
    if (!cadena) return console.log("No ingresaste texto");
    let contador = cadena.match(/[aeiou]/gi).length;
    contCons = cadena.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi)
        .length;
    return console.log(`Vocales: ${contador}, Consonantes: ${contCons}`);
};
vocales();
vocales("Hola Mundo");

const contarLetra = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto");
    if (typeof cadena !== "string") return console.error(`El tipo de dato ${cadena} insertado,NO es valido`);

    let vocales = 0
    let consonantes = 0;
    cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena) {
        if (/[aeiou]/.test(letra)) {
            vocales++;
        }
        if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) {
            consonantes++;
        }
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
};
contarLetra()
contarLetra('9')
contarLetra('Hola mundo')
contarLetra('Daniel')

/*19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

const validarName = (name = "") => {
    if (!name) return console.warn("No ingreso un nombre, vuelva a intentar");
    if (typeof name !== 'string') return console.warn(`El tipo de dato ${name} insertado,NO es valido`);

    let expReg = /^([a-z ñáéíóú]{2,60})$/i;
    if (expReg.test(name)) return true;
    else return false;
};
console.log(validarName());
console.log(validarName("0"));
console.log(validarName("Daniel Alejandro Ojeda"));
console.log(validarName("Jonathan MirCha"));

const validarNombre = (name = '') => {
    if (!name) return console.warn("No ingresaste una cadena de texto");
    if (typeof name !== 'string') return console.warn(`El tipo de dato ${name} insertado,NO es valido`);

    let expReg = /^[A-Za-zÑñáéíóú\s]+$/g.test(name)

    return expReg
        ? console.info(`${name}, es un nombre valido`)
        : console.warn(`${name}, NO es un nombre valido`)
}
validarNombre()
validarNombre('3')
validarNombre('Daniel Alejandro Ojeda')
validarNombre('Jonathan Mircha')

/*20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

const validarCorreo = (email = "") => {
    if (!email) return console.warn("Por favor ingrese un correo");

    let xpReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (xpReg.test(email)) return console.info("Email valido");
    else return console.log("Correo NO valido");
};
validarCorreo();
validarCorreo("jonmircha@gmail.com");
validarCorreo("Danistry@live");
validarCorreo("Theremixamx@gmail.com");


const validEmail = (correo = '') => {
    if (!correo) return console.warn("Por favor ingrese un correo");
    if (typeof correo !== 'string') return console.warn(`El tipo de dato ${correo} insertado,NO es valido`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo)

    return expReg
        ? console.info(`${correo}, es un nombre valido`)
        : console.warn(`${correo}, NO es un nombre valido`)
}

validEmail()
validEmail('3')
validEmail("jonmircha@gmail.com")
validEmail('Danistry@live')
validEmail('theremixamx@gmail.com')