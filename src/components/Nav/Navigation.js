import classes from '../Nav/Navbar.modules.css'
import NavLinks from "./NavLinks";
import whats from './imagens/icons/whats.png'
import ifood from './imagens/icons/ifood-white-bg.png'
import instagran from './imagens/icons/instagran.png'
import logo from './imagens/logo.svg'

const Navigation = () => {
    return ( 
        <nav className="Navigation">
             <img src={logo} alt="imagem-logo" />

             
             <div className="bx-redes">
                <img src={ifood} className="img-redes-sociais" />
                <img src={ifood} className="img-redes-sociais"/>
            </div>

             <div className="btn-agendar">
                <button className='btn'>
                <img src={whats}></img> 
                <a href="">CONTATO</a></button>
            </div>
        <NavLinks/>
        </nav>
     );
}
 
export default Navigation;