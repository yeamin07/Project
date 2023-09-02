import React from 'react'
import { PRODUCTS } from './../../products';
import Product from './product';
import './shop.css'


const Shop = () => {
  return (
    <div className='shop'>
      <div className="shopTitle">
        <h1>Yeamin's E-Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map(product => (
         // console.log(product);
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop