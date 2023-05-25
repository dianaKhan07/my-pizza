
import './App.css';

import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Pizza from './components/pizza/Pizza';
import Slider from './components/slider/Slider';
import Snacks from './components/snacks/Snacks';

function App() {
  return (
    <div className='mainContainer'> 

      <Header/>
      <Navigation/>
      <Slider/>
      <Pizza/>
      <Snacks/>
    </div>
  );
}

export default App;
