import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import CustomCarousel from './components/Carousel/Carousel';
import Slide from './components/Slide/Slide';
import Footer from './components/Footer/Footer';

function App() {

  let username = "Richard Ramos"
  return (
    <>
      <header>
        <NavBar username={username} avatarUrl="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" onLogout={() => console.log('Logged out!')} />
      </header>
      <main className='app'>
        <Slide />
        <CustomCarousel />
        <section className='welcome'>
          <ItemListContainer greeting={"Bienvenido a RoyalComerce, " + username} />
        </section>
        <ProductList />
      </main>
      <Footer />
    </>
  );
}

export default App;
