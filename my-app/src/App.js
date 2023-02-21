import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/Cards';
import RandomCharacterCard from './components/RandomCharacterCard/RandomCharacterCard';
import Header from './components/Header/Header';
import Info from './components/Info/Info';


function App() {
  return (
    <div className="App">
      <Header/>
      <RandomCharacterCard/>
      <div className='cards-info'>
      <Cards/>
      <Info/>
      </div>
    </div>
  );
}

export default App;
