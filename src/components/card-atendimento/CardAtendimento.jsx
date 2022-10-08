import React from 'react'
import './cardAtendimento.scss'
import imagem from './cliente.png'

export default function CardAtendimento() {
  return (
    <div className='card-atendimento'>

        <div className="container">
            <div className="box-imagem">
                <img src={imagem} alt="" />
            </div>
            <div className="box-text">
                <h2>
                Atendimento <br />
                   <span>personalizado</span>
                </h2>
                <h3>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</h3>

                <button>
                   <a href="">Cardápio Imperial</a>
                </button>
            </div>
        </div>

    </div>
  )
}
