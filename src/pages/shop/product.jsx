import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import './shop.css'

const Product = (props) => {
  //console.log(props.data);
  const { id, productName, price, productImage } = props.data
  const { addToCart, cartItems } = useContext(ShopContext)
  //console.log(cartItems);

  const cartItemCount = cartItems[id];
  //console.log(cartItemCount);

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <>{cartItemCount}</>}
      </button>
    </div>
  )
}

export default Product