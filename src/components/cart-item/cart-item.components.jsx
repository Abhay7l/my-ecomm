import {CartItemContainer,CartItemDetailsContainer} from './cart-item.styles.jsx'
const CartItem = ({cartItem}) => {
    const {name,quantity,imageUrl,price} = cartItem;
    return (
        <CartItemContainer>
        <img src={imageUrl} alt= {`${name}`}/>
        <CartItemDetailsContainer>
            <span className='name'>{name}</span>
            <span className='price'>{quantity}x${price}</span>

        </CartItemDetailsContainer> 
        </CartItemContainer>
    )
}
export default CartItem;