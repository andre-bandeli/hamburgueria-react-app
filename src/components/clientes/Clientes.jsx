
import React from 'react'
import './clientes.scss'
import ReactElasticCarousel from 'react-elastic-carousel'
import cliente from './cliente.png'

export default function Clientes() {


  const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 375, itemsToShow: 1},
    {width: 550, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1200, itemsToShow: 3},
    {width: 1400, itemsToShow: 3},
  ]


  return (
    <div className='clientes'>

      <h2>Nossa realeza</h2>
      <h3>A satisfação de nossos clientes em primeiro lugar!</h3>
     
        <div className="container">

        <ReactElasticCarousel breakPoints={breakPoints}>
          <div className='box'>
            <h2>"</h2>
            <div className="text">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci sunt, repudiandae totam
                  eveniet minima pariatur fuga atque placeat rem quam vel, nisi beatae ratione sit labore numquam asperiores corporis!</h3>
            </div>
            <div className="box-inferior">
                <div className="imagem">
                    <img src={cliente} alt="" />
                </div>
                <div className="text-inf">
                    <h4>Carla gomes</h4>
                    <h5>23 Anos • Designer</h5>
                </div>
            </div>
          
          </div>

          <div className='box'>
            <h2>"</h2>
            <div className="text">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci sunt, repudiandae totam
                  eveniet minima pariatur fuga atque placeat rem quam vel, nisi beatae ratione sit labore numquam asperiores corporis!</h3>
            </div>
            <div className="box-inferior">
                <div className="imagem">
                    <img src={cliente} alt="" />
                </div>
                <div className="text-inf">
                    <h4>Carla gomes</h4>
                    <h5>23 Anos • Designer</h5>
                </div>
            </div>

          </div>

          <div className='box'>
            <h2>"</h2>
            <div className="text">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci sunt, repudiandae totam
                  eveniet minima pariatur fuga atque placeat rem quam vel, nisi beatae ratione sit labore numquam asperiores corporis!</h3>
            </div>
            <div className="box-inferior">
                <div className="imagem">
                    <img src={cliente} alt="" />
                </div>
                <div className="text-inf">
                    <h4>Carla gomes</h4>
                    <h5>23 Anos • Designer</h5>
                </div>
            </div>
          </div>

          <div className='box'>
            <h2>"</h2>
            <div className="text">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci sunt, repudiandae totam
                  eveniet minima pariatur fuga atque placeat rem quam vel, nisi beatae ratione sit labore numquam asperiores corporis!</h3>
            </div>
            <div className="box-inferior">
                <div className="imagem">
                    <img src={cliente} alt="" />
                </div>
                <div className="text-inf">
                    <h4>Carla gomes</h4>
                    <h5>23 Anos • Designer</h5>
                </div>
            </div>
          </div>
         
   
          </ReactElasticCarousel>
            
        </div>
    </div>
  )
}
