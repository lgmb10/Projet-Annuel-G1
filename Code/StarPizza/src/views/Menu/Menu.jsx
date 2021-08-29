import React from 'react'
import { Drawer } from '../../components/Drawer'
import { Product } from '../../components/Products/Products'

import { PIZZAS } from './Menu.service'

import BgPizza from '../../assets/bg-pizza.png'
import './Menu.scss'

export const Menu = () => {
  return (
    <div className='flex'>
      <Drawer />
      <div className='flex-column'>
        <img src={BgPizza} className='background-pizza' />
        <p className='ml-1 bold italic purple xl-font-size'>NOS PIZZAS</p>
        <div className=' pizzas-container flex'>
          {PIZZAS.map((pizza) => (
            <Product
              price={pizza.price}
              image={pizza.image}
              pizza={pizza.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
