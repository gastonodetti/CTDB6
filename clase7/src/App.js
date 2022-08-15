import Palabra from "./Palabra"

function App() {

  const palabras = ["HOLA","HOLA","HOLA","MUNDO"]

  const mapear = (array) => {
    return array.map((palabra, i) => {
      return (
        <Palabra key={i} palabra={palabra} /> 
      )
    })
  }

  return (
    <div className="App">
      {mapear(palabras)}
    </div>
  );
}

export default App;
