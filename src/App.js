//Importo hoja de estilo de App.js
import './App.css';
//Importo clases de react-router-dom para funciones de navegación entre vistas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importo componentes
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
