import './App.css';
import Navbar from "../src/components/Nav/Navbar"
import Header from './components/header/Header';
import CardsPromocao from './components/cards-promocao/CardsPromocao';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <CardsPromocao/>
    </div>
  );
}

export default App;
