import React, { useEffect, useState } from 'react'
import Button from './Button'
import "./App.css";

const App = () => {
  const colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */

  const [state, setState] = useState(colors)

  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */

  const shuffle = () => {
    const newArr = [...state]
    const result = newArr.sort(() => (Math.random() > .5) ? 1 : -1)
    setState(result)
  }
  
    return (
      <div className="container">
        <div className="panel">
          {state.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={shuffle} />
      </div>

    )
  }

export default App