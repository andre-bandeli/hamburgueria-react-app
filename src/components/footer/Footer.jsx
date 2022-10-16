import React from 'react'
import './footer.scss'
import logo from './imagens/logo.png';
import ifood from './imagens/ifood.png'
import insta from './imagens/insta.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="col-6">
                    <img src={logo} alt="" />
            </div>
            <div className="col-4">
                <h2>
                    home
                </h2>
                <h2>
                    Localização
                </h2>
                <h2>
                    Cardápio
                </h2>
                <h2>
                    Sobre
                </h2>
            </div>
            <div className="col-2">
                <img src={ifood} alt="" />
                <img src={insta} alt="" />
            </div>
        
        </div>

        <div className="copy">
            <h2>2022 © EmpireBurger. Todos os direitos reservados.
</h2>
        </div>
    </div>
  )
}
