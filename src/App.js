import { useState,useEffect} from 'react';
import './App.css';


function App() {

  const [turno, setTurno] = useState(1);
  const [jugador1, setJugador1] = useState([]);
  const [jugador2, setJugador2] = useState([]);

  const handleClick = (e) => {
    setTurno(turno + 1);    
    e.target.classList.add(cambiarColor(turno));
    e.target.disabled = true;    
    posicion(e.target.className, cambiarColor(turno));    
  }
  
  useEffect(() => {
    linea3();
  },[turno])
  
 
  const cambiarColor = (turno) => {
    const color = turno % 2 === 0 ? "rojo" : "azul";
    return color;
  }
  const posicion = (eClass,color) => {
    color === "rojo"
      ?
      setJugador1(jugador1.concat([eClass]))
      :
      setJugador2(jugador2.concat([eClass]));
  }

  const linea3 = () => {
    if (
      (jugador1.includes("b1 rojo") && jugador1.includes("b2 rojo") && jugador1.includes("b3 rojo")) ||
      (jugador1.includes("b4 rojo") && jugador1.includes("b5 rojo") && jugador1.includes("b6 rojo")) ||
      (jugador1.includes("b7 rojo") && jugador1.includes("b8 rojo") && jugador1.includes("b9 rojo")) ||
        
      (jugador1.includes("b1 rojo") && jugador1.includes("b4 rojo") && jugador1.includes("b7 rojo")) ||
      (jugador1.includes("b2 rojo") && jugador1.includes("b5 rojo") && jugador1.includes("b8 rojo")) ||
      (jugador1.includes("b3 rojo") && jugador1.includes("b6 rojo") && jugador1.includes("b9 rojo")) ||
        
      (jugador1.includes("b1 rojo") && jugador1.includes("b5 rojo") && jugador1.includes("b9 rojo")) ||
      (jugador1.includes("b3 rojo") && jugador1.includes("b5 rojo") && jugador1.includes("b7 rojo"))
    ) {
      return alert("gana jugador Rojo");
    }
    else if
      (
      (jugador2.includes("b1 azul") && jugador2.includes("b2 azul") && jugador2.includes("b3 azul")) ||
      (jugador2.includes("b4 azul") && jugador2.includes("b5 azul") && jugador2.includes("b6 azul")) ||
      (jugador2.includes("b7 azul") && jugador2.includes("b8 azul") && jugador2.includes("b9 azul")) ||
        
      (jugador2.includes("b1 azul") && jugador2.includes("b4 azul") && jugador2.includes("b7 azul")) ||
      (jugador2.includes("b2 azul") && jugador2.includes("b5 azul") && jugador2.includes("b8 azul")) ||
      (jugador2.includes("b3 azul") && jugador2.includes("b6 azul") && jugador2.includes("b9 azul")) ||
        
      (jugador2.includes("b1 azul") && jugador2.includes("b5 azul") && jugador2.includes("b9 azul")) ||
      (jugador2.includes("b3 azul") && jugador2.includes("b5 azul") && jugador2.includes("b7 azul"))
    ) { 
      return alert("gana jugador Azul")
    }
    return
  }

  return (
    <>
    <label>Turno{turno}</label>
    <div className="App">     
      <button className='b1'
      onClick={handleClick}>        
      </button>
      <button className='b2'
      onClick={handleClick}>
      </button>
      <button className='b3'
      onClick={handleClick}>
      </button>
      <button className='b4'
      onClick={handleClick}>
      </button>
      <button className='b5'
      onClick={handleClick}>
      </button>
      <button className='b6'
      onClick={handleClick}>
      </button>
      <button className='b7'
      onClick={handleClick}>
      </button>
      <button className='b8'
      onClick={handleClick}>
      </button>
      <button className='b9'
      onClick={handleClick}>
      </button>
      </div>
      </>
  );
}

export default App;
