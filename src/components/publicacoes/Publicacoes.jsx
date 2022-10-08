import React from 'react'
import './publicacoes.scss'

import imagem_1 from './imagens/01.png'
import imagem_2 from './imagens/02.png'
import imagem_3 from './imagens/03.png'
import imagem_4 from './imagens/04.png'
 
export default function Publicacoes() {
  return (
    <div className='publicacoes'>
        <h2>Publicações do instagram</h2>
        <h3>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</h3>

        <div className="container">
            <div className="box">
                <img src={imagem_1} alt="" />
            </div>
            <div className="box">
                <img src={imagem_2} alt="" />
            </div>
            <div className="box">
                <img src={imagem_3} alt="" />
            </div>
            <div className="box">
                <img src={imagem_4} alt="" />
            </div>
            <div className="box">
                <img src={imagem_1} alt="" />
            </div>
            <div className="box">
                <img src={imagem_3} alt="" />
            </div>
            
        </div>
        <div className="span">
            <h2>• #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger </h2>
        </div>
      

    </div>
  )
}
