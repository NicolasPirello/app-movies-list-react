import { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = ( { ListadoState, setListadoState } ) => {

  // Estados y Hooks:
  
  const [ peliState, setPeliState ] = useState({
    titulo: "",
    descripcion: ""
  })

  // Variables:

  const tituloComponente = "Añadir Pelicula";

  // Funciones: 

  const conseguirDatosForm = (e) => {

    e.preventDefault();

    // Conseguir los datos del Formulario

    let target = e.target; // Acordarse que con e.target."nombre".value podes conseguir el valor de ese input con ese "name"
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // Crear objeto de la Pelicula.

    let peli = {
      id: new Date().getTime(), // Conseguimos hacer un Id Unico con la fecha en unix.
      titulo,
      descripcion
    }

    // Guardamos la pelicula en el estado.

    setPeliState(peli)

    // Actualizamos el listado
    // Lo que hago es agarrar los elementos que ya existen en ListadoState y le agrego el nuevo.
    // Me fijo antes que nada si existe un array para poder iterar y agregar el elemento nuevo, si no existe creo ese array y le agrego la peli.

    let peliculas = localStorage.getItem("pelis")

    if (peliculas != null ) {
      console.log("No esta vacio")
      setListadoState( elementos => {
        return [...elementos, peli]
      })
    } else {
      console.log("Esta Vacio - Seteo para que deje de estarlo")
      setListadoState([peli])
    }

    // Guardamos en Storage
    GuardarEnStorage( "pelis", peli )

    setPeliState({
      titulo: "",
      descripcion: ""
    })

    // Reseteamos el formulario completo.
    e.target.reset()

  }

   // Codigo para retornar a la vista: 

  return (

    <div className="add">

      <h3 className="title">{tituloComponente}</h3>

      <form onSubmit={conseguirDatosForm}>

        <input 
          type="text" 
          id="titulo" 
          name="titulo" /* Acordarse que el name es lo que usamos para capturar el valor */
          placeholder="Titulo"
        />

        <textarea 
          id="descripcion"
          name="descripcion" 
          placeholder="Descripción">
        </textarea>

        <input 
          type="submit" 
          id="save" 
          value="Guardar" 
        />

      </form>

    </div>
  );
};

export default Crear;
