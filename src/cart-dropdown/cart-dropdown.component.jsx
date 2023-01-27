import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import './cart-dropdown.jsx'
import { CartDropdownContainer,EmptyMessage,CartItems } from './cart-dropdown.jsx';
import { CartContext } from '../contexts/cart.context';
import Button from '../components/button/button.component';
import CartItem from '../components/cart-item/cart-item.components';
const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
   return(
    <CartDropdownContainer>
        <CartItems>
        {
            cartItems.length ? (
        cartItems.map((item) => <CartItem key ={ item.id }cartItem={item}/>)
         ):(
           <EmptyMessage>Your cart is empty </EmptyMessage>
         )}
             {/* <h2 className='empty-message'>Your cart is empty</h2> */}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>GO TO CHECHKOUT</Button>
    </CartDropdownContainer>
   )
}

export default CartDropdown;