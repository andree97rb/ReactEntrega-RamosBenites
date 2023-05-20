import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCarousel from './componentes/Carousel/Carousel';
import Slide from './componentes/Slide/Slide';
import NavBar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
function App() {
  let username = "Richard Ramos"
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar username={username} avatarUrl="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" onLogout={() => console.log('Logged out!')} />
        </header>
        <Slide />
        <CustomCarousel />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
