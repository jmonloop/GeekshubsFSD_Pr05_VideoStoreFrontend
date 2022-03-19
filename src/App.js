//Importo hoja de estilo de App.js
import './App.css';
//Importo clases de react-router-dom para funciones de navegación entre vistas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sticky from 'react-sticky-el';

//Importo componentes
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Profile from './Containers/Profile/Profile';
import MovieDetail from './Containers/MovieDetail/MovieDetail';
import Admin from './Containers/Admin/Admin';
import Cart from './Containers/Cart/Cart';
import AdvSearch from './Containers/AdvSearch/AdvSearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sticky>
          <Header />
        </Sticky>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviedetail" element={<MovieDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<AdvSearch />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
