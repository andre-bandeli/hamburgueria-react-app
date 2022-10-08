import React from 'react'
import './cardspromocao.scss'

import vetor from '../cards-promocao/imagens/imagem-1.png';
import segundo_vetor from '../cards-promocao/imagens/imagem-2.png';
import terceiro_vetor from '../cards-promocao/imagens/imagem-3.png';

export default function CardsPromocao() {
  return (
    <div className='promocao'>
        <div className="container-bx-cards">
            <h2>OFERTAS ESPECIAIS</h2>
            <h3>Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos mudando o nosso cardapio.</h3>

           <div className="box">

            <div className="col-8">
                <img src={vetor} alt="" />
            </div>
            <div className="col-4">

                <div className="row-cards">
                    <img src={segundo_vetor} alt="" />
                </div>
                <div className="row-cards">
                    <img src={terceiro_vetor} alt="" />
                </div>
                
            </div>

           </div>
           
               
        </div>

    </div>
  )
}
