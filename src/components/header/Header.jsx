import React from 'react'
import './header.scss'
import icone from './icons/icone-1.png'
import atendimento from './icons/atendimento.png'
import delivery from './icons/delivery.png'

export default function Header() {
  return (
    <div className='header'>
        <div className="container">
          <div className="inicial-text">
            <h3>Uma nova experiência!</h3>
            <h1>KING <span className='spn-principal-text'>BURGUER</span></h1>
            <h2>Para quem tem um <span className='spn-secundary-text'>Apetite de um REI!</span></h2>

            <button className="btn">
                <a href="">Comprar Agora</a>
            </button>
          </div>

           
         
        </div>

      <div className="container-bx">

          <div className="box">
              <div className="icon">
                <img src={icone} alt="" />
              </div>
              <div className="text">
                <h2>ARTESANAL</h2>
                <h3>Nossas receitas são feitas com todo cuidado</h3>
              </div>
          </div>
        
          <div className="box">
            <div className="icon">
                <img src={atendimento} alt="" />
              </div>
              <div className="text">
                <h2>ATENDIMENTO</h2>
                <h3>Totalmente personalizado</h3>
              </div>
          </div>

          <div className="box" id='last-bx'>
              <div className="icon">
                <img src={delivery} alt="" />
              </div>
              <div className="text">
                <h2>DELIVERY SPEED</h2>
                <h3>Entregamos menos de 45 minutos</h3>
              </div>  
          </div>
        
      </div>

    </div>
  )
}
