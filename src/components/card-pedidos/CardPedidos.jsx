import React from 'react'
import './cardPedidos.scss'

import smartphone from './smartphone.png';
import vetor from './vetor.png';

export default function CardPedidos() {
  return (
    <div className='card-pedidos'>

        <div className="container">
          <div className="icon">
              <img src={smartphone} alt="" />
          </div>
            <div className="text">
                <h2>
                faça o seu pedido agora mesmo!
                </h2>
                <h3>Venha saborear a melhor experiência de hamburguenses artesanal do Empires Burger, com temática medieval!</h3>
            </div>
            <div className="btn">
              <button>
                  <a href="">Solicitar Pedido</a>
              </button>
            </div>
          
        </div>

    </div>
  )
}
