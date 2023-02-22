import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/Cards';
import RandomCharacterCard from './components/RandomCharacterCard/RandomCharacterCard';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


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
        <ErrorBoundary>
          <RandomCharacterCard/>
        </ErrorBoundary>
        <div className='cards-info'>
          <ErrorBoundary>
            <Cards recieveCharId={this.recieveCharId}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <Info charId={this.state.selectedChar}/>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
