import './App.css';
import reactLogo from "./imagenes/logo.png";
import Boton from "./componentes/Boton.jsx"
import Contador from "./componentes/Contador.jsx"
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
      setNumClics(numClics + 1);
    }

  const reiniciarContador = () => {
    setNumClics(0);
  }


  return (
    <div className="App">
      <div className='contador-logo-contenedor'>
        <img className='contador-logo' 
        src={reactLogo} alt="" />
      </div>

      <div className='contenedor-prinicipal'>

      <Contador 
        
        numClics={numClics}
      />

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
