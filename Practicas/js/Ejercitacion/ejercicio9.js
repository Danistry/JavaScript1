/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: }
id de la película en IMDB, titulo, director, año de estreno,
país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: 
Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, 
Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, 
Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

//Declaramos una clase 

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id
    this.titulo = titulo
    this.director = director
    this.estreno = estreno
    this.pais = pais
    this.generos = generos
    this.calificacion = calificacion

    this.validarIMBD(id)
  }
  validarCadena(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`)

    return true
  }
  validarLongitudCadena(propiedad, valor, longitud){
    if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`)
  return true
  }

  validarIMBD(id) {
    if (this.validarCadena('IMBD ID', id))
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id)))
        return console.error(`IMBD ID "${id}" no es valido, 
        debe tener 9 caracteres, los 2 primeros letras minusculas, las 7 restantes numeros`)
  }


  validarTitulo(titulo) {
    if (this.validarCadena('Titulo', titulo))
      this.validarLongitudCadena('Titulo', titulo, 100) 
  }
}
const peli = new Pelicula({
  id: 'tt1234567'
})

