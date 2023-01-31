import React from 'react'

const Editar = ( { pelicula, conseguirPeliculas, setEditar} ) => {

    // Variables

    const titulo_componente = "Editar Pelicula";

    // Funciones:

    const guardarEdicion = (e, id) => {
        e.preventDefault()
        
        // Conseguir el target del evento
        let target = e.target

        // Buscar el INDICE del objeto de la pelicula a actualizar
        // Para encontrarla uso la funcion conseguir pelicula que ya tenia creada en otro componente. Aunque en un futuro deberia usar useContext.
        const pelis_almacenadas = conseguirPeliculas()
        // Este metodo sirve para averiguar el indice, recorremos con "peli" cada pelicula y si coincide con el id devolveme el indice ese.
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id)

        // Crear objeto con ese indice
        let peli_nueva = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Actualizar el elemento con ese Indice

        pelis_almacenadas[indice] = peli_nueva

        // Guardar el nuevo array de objetos en el LocalStorage

        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        // Actualizar estados
        // Se le pone un 0 para cerrar el formulario
        setEditar(0)
    }

  return (

    <div className='editarPelicula'>

        <hr/>
        
        <h4 className=''>{titulo_componente}</h4>

        <form onSubmit={ (e) => {guardarEdicion ( e, pelicula.id)} }>

            <input 
                type="text" 
                name="titulo" 
                className='' 
                defaultValue={pelicula.titulo}
            />

            <textarea 
                name="descripcion" 
                defaultValue={pelicula.descripcion}
                className=''
            />

            <input 
                type="submit" 
                className='' 
                value="Actualizar" 
            />


        </form>

    </div>

  )
}

export default Editar