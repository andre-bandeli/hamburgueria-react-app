import React from 'react'
import './cardEntrega.scss'
import imagem from './imagem-fundo.png'

import sobremesa from './icones/sobremesa.png'
import whats from './icones/whats.png'
import delivery from './icones/delivery.png'
import ifood from './icones/ifood.png'


export default function CardEntrega() {
  return (
    <div className='card-entrega'>

      <div className="container">
        <div className="box-imagem">
          <img src={imagem} alt="" />
        </div>
        <div className="box-text">
          <h2>
            Nossas entregas
          </h2>

          <div className="box">
            <div className="icone">
              <img src={whats} alt="" />
            </div>
            <div className="text">

              <h2>
                Whatsapp
              </h2>
              <h3>
                Vamos direto ao ponto, sem perder tempo!
              </h3>

            </div>
          </div>
          <div className="box">
            <div className="icone">
              <img src={delivery} alt="" />
            </div>
            <div className="text">

              <h2>
                Entrega
              </h2>
              <h3>
                Entregamos menos de 45 minutos na porta da sua casa!
              </h3>

            </div>
          </div>
          <div className="box">
            <div className="icone">
              <img src={sobremesa} alt="" />
            </div>
            <div className="text">

              <h2>
                Sobremesa
              </h2>
              <h3>
                Pedidos assima de 100 reais, ganham brindes.
              </h3>

            </div>
          </div>
          <div className="box">
            <div className="icone">
              <img src={sobremesa} alt="" />
            </div>
            <div className="text">

              <h2>
                iFood
              </h2>
              <h3>
                Nossa loja é Top 1 da região!
              </h3>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
