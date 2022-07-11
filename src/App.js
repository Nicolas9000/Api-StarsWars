import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Etape1 from './components/Etape1';
import Etape2 from './components/Etape2';
import Etape3 from './components/Etape3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Etape1 />} />
        <Route path='/people/:id' element={<Etape2 />} />
        <Route path='/starship/:id' element={<Etape3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
