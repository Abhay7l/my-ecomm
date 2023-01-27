import { useContext } from 'react';
// import './cart-icon.styles.scss';
// import {ReactComponent as ShoppingIcon}from '../../assests/shopping-bag.svg';
import { CartIconContainer,ItemCount,ShoppingIcon } from './cart-icon.styles';
// import { CartContext } from '../../contexts/cart.context';
// import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
const CartIcon = () =>{
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            {/* <ShoppingIcon className='shopping-icon'/> */}
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;