import React from 'react'
import wosung from "../Imagenes/equipo.jpg"
import asiana from "../Imagenes/asiana.jpg";
import KOS from "../Imagenes/KOS.jpg";
import MOTO from "../Imagenes/moto.jpg"

export const ProductosLista = () => {
  return (
    <>
    <h1 className='title'>PRODUCTOS</h1>
    <div className='productos'>
      <div className='producto'>
      <a href="#!">
      <div className='producto_img'>
        <img src={wosung} alt=""/>
      </div>
      </a>
      <div className='producto_footer'>
        <h1>Equipo de combate marca Wosung</h1>
        <p>categoria</p>
        <p className='price'>$2000</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Añadir al carrito
          </button>
          <div>
          <a href='#!' className='btn' > vista</a>
          </div>
          </div> 
          </div>

          <div className='producto'>
      <a href="#!">
      <div className='producto_img'>
        <img src={asiana} alt=""/>
      </div>
      </a>
      <div className='producto_footer'>
        <h1>Equipo de combate asiana</h1>
        <p>categoria</p>
        <p className='price'>$3500</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Añadir al carrito
          </button>
          <div>
          <a href='#!' className='btn' > vista</a>
          </div>
          </div> 
          </div>

          <div className='producto'>
      <a href="#!">
      <div className='producto_img'>
        <img src={KOS} alt=""/>
      </div>
      </a>
      <div className='producto_footer'>
        <h1>Equipo de combate marca kos</h1>
        <p>categoria</p>
        <p className='price'>$4000</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Añadir al carrito
          </button>
          <div>
          <a href='#!' className='btn' > vista</a>
          </div>
          </div> 
          </div>

          <div className='producto'>
      <a href="#!">
      <div className='producto_img'>
        <img src={MOTO} alt=""/>
      </div>
      </a>
      <div className='producto_footer'>
        <h1>Equipo de combate marca moto</h1>
        <p>categoria</p>
        <p className='price'>$5000</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Añadir al carrito
          </button>
          <div>
          <a href='#!' className='btn' > vista</a>
          </div>
          </div> 
          </div> 

          <div className='producto'>
      <a href="#!">
      <div className='producto_img'>
        <img src="" alt="log"/>
      </div>
      </a>
      <div className='producto_footer'>
        <h1>Mochila kos</h1>
        <p>categoria</p>
        <p className='price'>$250</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Añadir al carrito
          </button>
          <div>
          <a href='#!' className='btn' > vista</a>
          </div>
          </div> 
          </div>

    </div>
    </>
  )
}
