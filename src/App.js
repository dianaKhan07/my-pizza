
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Product from './components/pizza/Pizza';
import Slider from './components/slider/Slider';

function App() {
  return (
    <>
    <div className='mainContainer'> 

      <Header/>
      <Navigation/>
      <Slider/>
      <Product id="pizzas" name="Пицца"/>
      <Product id="snacks" name="закуски"/>
      <Product id="desserts" name="десерты"/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
