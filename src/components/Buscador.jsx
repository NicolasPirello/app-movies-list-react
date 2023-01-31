import { useState } from "react"

const Buscador = ( { listadoState, setListadoState } ) => {

  // Hooks:

  const [ busqueda, setBusqueda ] = useState("")
  const [ noEncontrado, setNoEncontrado ] = useState(false) // Para mostrar mensaje. por defecto viene en false porque en teoria hay resultados

  // Funciones:

  const buscarPeli = (e) => {

    e.preventDefault()

    // Seteo el valor de busqueda con lo que voy tipeando, y eso mismo se va poniendo como valor del input
    setBusqueda(e.target.value)

    // Listado completo de Peliculas.
    // Lo tengo con el "listadoState"

    // Filtrarlo para buscar coincidencias.

    let pelis_encontradas = listadoState.filter( peli => {
      // Uso toLowerCase() para convertir todo en minuscula, con el fin de "Igualar datos".
      // Uso el metodo includes() para ver si x cosa esta incluida dentro, le paso busqueda que tiene el valor de lo que escribo.
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    })

    // Si lo que escribo tiene un caracter o menos, me devuelve todas las peliculas.

    console.log(pelis_encontradas.length)

    if (busqueda.length <= 1 || pelis_encontradas.length <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
      // Si no encuentro coincidencias, pongo el true en noEncontrado
      setNoEncontrado(true);
    } else {
      // Pero si las encuentro pongo en false.
      setNoEncontrado(false);
    }

    // Actualizo listado.
    // Toodo esto se puede hacer mas facil con useEffect pero queria probar hacerlo asi.

    setListadoState(pelis_encontradas);

  }

  return (
    
    <div className="search">

        <h3 className="title">Buscador de Peliculas</h3>
        { (noEncontrado && busqueda.length >= 2) ? 
          <span className="no-encontrado">No se encontraron coindicendias con tu busqueda :(</span>
         : "" }

        <form>

            <input 
              placeholder="Busca tu pelicula" 
              type="text" 
              id="search_field" 
              name="busqueda"
              autoComplete="off" // Para que no autocomplete con nada.
              value={busqueda}
              onChange={buscarPeli}
            />
        </form>
    </div>

  )
}

export default Buscador;