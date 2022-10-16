import './App.css';
import Navbar from "../src/components/Nav/Navbar"
import Header from './components/header/Header';
import CardsPromocao from './components/cards-promocao/CardsPromocao';
import CardsFuncionamento from './components/cards-funcionamento/CardsFuncionamento';
import CardsCardapio from './components/cards-cardapio/CardsCardapio';
import CardAtendimento from './components/card-atendimento/CardAtendimento';
import Clientes from './components/clientes/Clientes';
import Publicacoes from './components/publicacoes/Publicacoes';
import CardEntrega from './components/card-entrega/CardEntrega';
import CardPedidos from './components/card-pedidos/CardPedidos';
import Maps from './components/maps/Maps';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Header/> 
      <CardsPromocao/> 
      <CardsFuncionamento/> 
      <CardsCardapio/>
      <CardAtendimento/>
      <Clientes/>
      <Publicacoes/>
      <CardEntrega/>
      <CardPedidos/>
      <Maps/>
      <Footer/>
    </div>
  );
}

export default App;
