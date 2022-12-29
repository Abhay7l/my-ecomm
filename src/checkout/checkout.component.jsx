import './checkout.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
const CheckOUt = () => {
  const {imageUrl,name,quantity} = useContext(CartContext);
    return (
      <div>
        <img src = {imageUrl} alt={`${name}`}/>
        <h2>{quantity}</h2>
      </div>
  )
}

export default CheckOUt;