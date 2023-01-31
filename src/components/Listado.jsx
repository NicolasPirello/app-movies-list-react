import { useState } from "react";
import { useEffect } from "react";
import Editar from "./Editar";


function Listado( {listadoState, setListadoState} ) {

    // Hooks:

    // Lo pase a App: 
    // const [ listadoState, setListadoState ] = useState([])
    const [ editar, setEditar ] = useState(0)

    useEffect(() => {
        conseguirPeliculas()
    }, [])

    // Funciones:

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        setListadoState(peliculas)
        return peliculas // Hago un return para poder usar esta funcion en otro lado.
    }

    const borrarPeli = (id) => {
        
        // Conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas()

        // Filtrar peliculas para eliminar la que quiero
        let nuevo_array_peliculas = pelis_almacenadas.filter( pelicula => pelicula.id != id)

        // Actualizar estado del listado
        setListadoState(nuevo_array_peliculas)

        // Actualizar Local Storage
        localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas))
    }

    // Return de impresion a la vista.
    
  return (

    <>

        {listadoState != null ? listadoState.map( pelicula => {

            return (

                <article key={pelicula.id} className="peli-item">

                    <h3 className="title">{pelicula.titulo}</h3>
                    <p className="description">{pelicula.descripcion}</p>

                    <div>
                        <button className="edit" onClick={ () => {setEditar(pelicula.id)} }>Editar</button>
                        <button className="delete" onClick={ () => {borrarPeli(pelicula.id)}}>Borrar</button>
                    </div>

                    {/* Formulario de Editar */}

                    {editar === pelicula.id ? (
                        <Editar 
                        pelicula={pelicula}
                        conseguirPeliculas={conseguirPeliculas}
                        setEditar={setEditar}
                        />
                    ) : ("") }

                </article>

            )
            
        }) : "" }

    </>
  )
}

export default Listado;