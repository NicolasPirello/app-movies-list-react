import Buscador from "./Buscador";
import Crear from "./Crear";
import Footer from "./Footer";
import Header from "./Header";
import Listado from "./Listado";
import Navbar from "./Navbar";
import { useState } from "react";


function App() {

  // Hooks:

  const [ listadoState, setListadoState ] = useState([])

  let pelis_default = [{"id":1675075590769,"titulo":"Los Increibles II","descripcion":"Peli de Disney"},{"id":1675075759779,"titulo":"DBS - La batalla de los dioses","descripcion":"Pelicula Nashe de dragon ball super"},{"id":1675078345753,"titulo":"El Joker | La pelicula","descripcion":"Muy buena Peli, me gusto"},{"id":1675081275063,"titulo":"DBS | La resurrección de Freezer","descripcion":"Peli de Dragon Ball Super que la rompe"}]

  console.log(listadoState)

  return (

    <div className="App">

      <div className="layout">

        {/*Cabecera*/}

        <Header/>

        {/*Barra de navegación*/}

        <Navbar/>

        {/*Contenido principal*/}

        <div className="content-and-lateral">

          {/*Barra lateral*/}

          <aside className="lateral">

            <Buscador
              listadoState={listadoState}
              setListadoState={setListadoState}
            />

            <Crear
              listadoState={listadoState}
              setListadoState={setListadoState}
            />

          </aside> 


          <section id="content"  className= {listadoState.length == 0 ? "no-hay-peliculas" : "content"} >

          {listadoState.length == 0 ? 
          
          <h3 className="peli-item__sin-pelicula">No hay peliculas para mostrar, por favor agrega una :)</h3>
          
          : ""}


            {/*aqui van las peliculas*/}

            <Listado
              listadoState={listadoState}
              setListadoState={setListadoState}
            />

          </section>

        </div>

        {/*Pie de página*/}

        <Footer/>

      </div>
    </div>
  );
}

export default App;
