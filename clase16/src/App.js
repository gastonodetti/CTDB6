import { BrowserRouter, Routes, Route, } from "react-router-dom"; 
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
     
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />}>  
          <Route path="cats" element={<Cat />} /> 
          <Route path="dogs" element={<Dog />} /> 
        </Route>
      </Routes> 
    </BrowserRouter>

    </div>
  );
}

export default App;