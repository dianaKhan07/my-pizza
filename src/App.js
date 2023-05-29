
import './App.css';

import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Product from './components/pizza/Pizza';
import Slider from './components/slider/Slider';
import Snacks from './components/snacks/Snacks';

function App() {
  return (
    <div className='mainContainer'> 

      <Header/>
      <Navigation/>
      <Slider/>
      <Product id="pizzas" name="Пицца"/>
      <Product id="snacks" name="закуски"/>
      <Product id="desserts" name="десерты"/>
     
      {/* <Snacks/> */}
    </div>
  );
}

export default App;
