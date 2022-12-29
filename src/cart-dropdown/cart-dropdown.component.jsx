import { useContext } from 'react';
import './cart-dropdown.scss'
import { CartContext } from '../contexts/cart.context';
import Button from '../components/button/button.component';
import CartItem from '../components/cart-item/cart-item.components';
const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext);
   return(
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.map((item)=>(
         <CartItem key ={ item.id }cartItem={item}/>
         ))}
             <h2 className='empty-message'>Your cart is empty</h2>
        </div>
        {/* <link ></link> */}
        <Button>GO TO CHECHKOUT</Button>
    </div>
   )
}

export default CartDropdown;