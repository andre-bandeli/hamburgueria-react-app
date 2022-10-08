import './App.css';
import Navbar from "../src/components/Nav/Navbar"
import Header from './components/header/Header';
import CardsPromocao from './components/cards-promocao/CardsPromocao';
import CardsFuncionamento from './components/cards-funcionamento/CardsFuncionamento';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <CardsPromocao/>
      <CardsFuncionamento/>
    </div>
  );
}

export default App;
