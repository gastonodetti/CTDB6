import '../styles/App.css';
import FunctionComponent from '../components/FunctionComponent';
import ClassComponent from '../components/ClassComponent';

function App() {
  return (
    <div className="App">
      <h3>Invitados</h3>
      <ul>
        <ClassComponent nombre='Laura' invitacion={false} />
        <ClassComponent nombre='Marcos' invitacion={true} />
        <ClassComponent nombre='Flor' invitacion={true} />
        <ClassComponent nombre='Pedro' invitacion={false} />

      </ul>
      <h3>Tareas</h3>
      <ul>
        <FunctionComponent nombre='Mari' comida='bebidas' />
        <FunctionComponent nombre='Juan' comida='comida' />
        <FunctionComponent nombre='Caro' comida='bebidas' />
        <FunctionComponent nombre='Fede' comida='bebidas' />
      </ul>

    </div>
  );
}

export default App;
