import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/Cards';
import RandomCharacterCard from './components/RandomCharacterCard/RandomCharacterCard';
import Header from './components/Header/Header';
import Info from './components/Info/Info';


class App extends Component {
  state = {
    selectedChar: null
  }
  recieveCharId = (id) => {
    this.setState({
      selectedChar: id
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <RandomCharacterCard/>
        <div className='cards-info'>
        <Cards recieveCharId={this.recieveCharId}/>
        <Info charId={this.state.selectedChar}/>
        </div>
      </div>
    );
  }
}

export default App;
