import { createContext,useState ,useEffect} from "react";

const addCartItem = (cartItems,productToAdd) => {
    //find if cartitems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => 
      cartItem.id===productToAdd.id
    );
    //if found, increament the quantity
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        { ...cartItem,quantity:  cartItem.quantity+1}:cartItem
        )
    }
    // return new array with modified cartItes/new cart item
   return [...cartItems,{ ...productToAdd,quantity : 1}];//if we dont have the current product than return the original arr with new product and its quantity as 1
}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:() =>{},
    cartItem: [],
    addItemToCart: () => {},
    cartCount: 0,
})

//the structure of the cartItem arr is 
/*
{
   id,
   name,
   image,
   price,
   quantity
}
*/

export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    useEffect(()=>{
       const newCartCount = cartItems.reduce((total,cartItem)=>
       total+cartItem.quantity,0)
       setCartCount(newCartCount);
    },[cartItems]);//whenever the cartItems changes we have to update our cartCount
    const addItemToCart = (productToAdd) =>{
setCartItems(addCartItem(cartItems,productToAdd));
    }

    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
