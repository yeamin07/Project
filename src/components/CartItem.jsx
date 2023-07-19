import { useState } from "react";
import { useDispatch } from "react-redux";
import { icons } from '../assets'

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity)
    const dispatch = useDispatch()
    return (
        <tr>
            <td>
                <div className="product">
                    <img
                        src={item.images}
                        className="product-img"
                    />
                </div>
            </td>
            <td><p>{item.title}</p></td>
            <td>${item.price}</td>
            <td>
                <div className="qty_input">
                    <button className="qty-count qty-count--minus"
                        data-action="minus"
                        type="button" >
                      <figure onClick={()=>{
                        if(quantity > 1){
                            setQuantity((prev) => prev-1)
                            dispatch({type:'MODIFY_QUANTITY_OF_AN_ITEM',payload:{id:item.id,quantity:quantity-1}})
                        }
                      }} >
                        <img src={icons.minusIcon} />
                      </figure>
                    </button>
                    <input 
                     className="product-qty"
                     type="number"
                     name="product-qty"
                     value={quantity}
                     min='1'
                     onChange={(e) => {
                        if(parseInt(e.target.value) >=1){
                            setQuantity(parseInt(e.target.value))
                            dispatch({type:'MODIFY_QUANTITY_OF_AN_ITEM',payload:{id:item.id,quantity:parseInt(e.target.value)}})
                        }
                     }}
                    />
                    <button
                    className="qty-count qty-count--add"
                    data-action="add"
                    type="button"
                    >
                        <figure onClick={()=>{
                            if(quantity >= 1){
                                setQuantity((prev)=> prev+1)
                                dispatch({type:'MODIFY_QUANTITY_OF_AN_ITEM',payload:{id:item.id,quantity:quantity+1}})
                            }
                        }} >
                         <img src={icons.plusIcon} />
                        </figure>
                    </button>
                </div>
            </td>
            <td>${item.quantity? item.price * item.quantity : 0}</td>
            <td>
                <img onClick={() => dispatch({type:'REMOVE_FROM_CART',payload:item.id})}
                className="cross-icon" src={icons.crossIcon} />
            </td>
        </tr>
    )
}

export default CartItem