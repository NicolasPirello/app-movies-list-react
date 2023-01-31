  // Con la funcion guardarEnStorage recibimos como parametro una pelicula, que en este caso es un objeto.

export const GuardarEnStorage = ( clave , elemento ) => {

    // Conseguir los elementos que ya tenemos en LocalStorage.
    // Debemos convertir el JSON en Objeto con JSON.parse.
    // Con getItem conseguimos el item que queremos, en este caso la clave que queremos es "pelis" ya que es la que le vamos a crear si no existe.
    let elementos = JSON.parse(localStorage.getItem(clave))

    // Comprobar si es un Array.
    // Array.isArray comprueba si un elemento es un array
    if (Array.isArray(elementos)){
      // Añadir dentro del array un nuevo elemento.
      elementos.push(elemento)
    } else {
      // Crear un array nuevo con ese elemento.
      elementos = [elemento] // Le metemos la peli adentro del array ya que la misma es un objeto.
    }
    
    // Guardar en el Local Storage.
    localStorage.setItem(clave, JSON.stringify(elementos)); // LocalStorage guarda solamente JSON, por ende si tenemos un objeto hay que convertirlo.

    // Devolver un Objeto..
    return elemento;

  }