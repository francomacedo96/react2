import './App.css';
import reactLogo from "./imagenes/logo.png";
import Boton from "./componentes/Boton.jsx"

function App() {

  const manejarClic = () => {
    console.log("clic");
  }

  const reiniciarContador = () => {
    console.log("reiniciar");
  }


  return (
    <div className="App">
      <div className='contador-logo-contenedor'>
        <img className='contador-logo' 
        src={reactLogo} alt="" />
      </div>

      <div className='contenedor-prinicipal'>


      <Boton 
        texto="Click"
        esBotonDeClic={true}
        manejarClic={manejarClic}
      />

      <Boton 
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
      />


      </div>
    </div> 
  );
}

export default App;
