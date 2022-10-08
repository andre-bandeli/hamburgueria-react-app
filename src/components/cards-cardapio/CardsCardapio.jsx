import React from 'react'
import './cardsCardapio.scss'


export default function CardsCardapio() {
  return (
    <div className='cards-cardapio'> 

        <div className="col-6-img">

            <h2>Escolha o seu combo imperial, <span className='spn-text'>peça agora!</span></h2>
            <h3>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</h3>
            <button className='btn-cardapio'>
              <a href="">Ver Cardápio Completo</a> 
            </button>
            
        </div>
        <div className="col-6">

          <h2>Cardápio imperial | Burger</h2>

          <ul>
            <h3>
                Classic burger ......................................................................... R$49,99
            </h3>
            <li>
             <h4> Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</h4>
            </li>
            <h3>
                Classic burger ......................................................................... R$49,99
            </h3>
            <li>
             <h4> Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</h4>
            </li>
            <h3>
                Classic burger ......................................................................... R$49,99
            </h3>
            <li>
             <h4> Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</h4>
            </li>

            <h3>
                Classic burger ......................................................................... R$49,99
            </h3>
            <li>
             <h4> Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</h4>
            </li>
          </ul>
        
        </div>

    </div>
  )
}
