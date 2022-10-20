import React from 'react'
import './cardsFuncionamento.scss'

import icon from '../cards-funcionamento/relogio.png'
export default function CardsFuncionamento() {
  return (
    <div className='cards-funcionamento' id='funcionamento'>

        <div className="container">
            <div className="col-6-red">
                <div className="img">
                    <img src={icon} alt="" />
                </div>
                <div className="text">
                  <h2>HORÁRIO DE FUNCIONAMENTO</h2>
                  <h3>Segunda-feira a sexta-feira: 17h00 - 23h00</h3>
                  <h3>Sabado a Domíngo: 18h30 - 23h00</h3>

                </div>
            </div>
            <div className="col-6">
                <h3>Não esqueça de marcar a gente no Instagram:</h3>
                <h2>#EMPIREBURGUER </h2>
            </div>
        </div>

    </div>
  )
}
