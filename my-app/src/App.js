import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/Cards';
import CharacterCard from './components/CharacterCard/CharacterCard';
import Header from './components/Header/Header';
import Info from './components/Info/Info';


function App() {
  return (
    <div className="App">
      <Header/>
      <CharacterCard/>
      <div className='cards-info'>
      <Cards/>
      <Info/>
      </div>
    </div>
  );
}

export default App;
