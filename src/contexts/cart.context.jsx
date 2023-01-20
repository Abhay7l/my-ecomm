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

const removeCartItem = (cartItems,cartItemToRemove) => {
    //find the item to remove
    const existingCartItem = cartItems.find((cartItem) => 
    cartItem.id===cartItemToRemove.id
  );
    //check if the quantity is equal to 1, if it is remove that item from the cart
    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem => cartItem.id!==cartItemToRemove.id);
        //a new array has been returned where the cartItem.id !== cartItemToRemove i.e, the array does not contain the item to be removed;
    }
    //return back cartItems with matching cart item with reduced quantity
    return cartItems.map((cartItem)=>
       cartItem.id===cartItemToRemove.id
       ? { ...cartItem,quantity:cartItem.quantity-1}:cartItem    
    );
};

const clearCartItem = (cartItems,cartItemToClear) => 
         cartItems.filter((cartItem) => cartItem.id!==cartItemToClear.id);

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:() =>{},
    cartItem: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal:0,
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
    const [cartTotal,setCartTotal] = useState(0);
    
    
    useEffect(()=>{
       const newCartCount = cartItems.reduce((total,cartItem)=>
       total+cartItem.quantity,0)
       setCartCount(newCartCount);
    },[cartItems]);//whenever the cartItems changes we have to update our cartCount
    
    
    useEffect(()=>{
        const newTotalCount = cartItems.reduce((total,cartItem)=>
        total+cartItem.quantity*cartItem.price,0)
        setCartTotal(newTotalCount);
     },[cartItems]);

     
    const addItemToCart = (productToAdd) =>{
setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemToCart = (cartItemToRemove) =>{
setCartItems(removeCartItem(cartItems,cartItemToRemove));
    }
    const clearItemFromCart = (cartItemToRemove) =>{
setCartItems(clearCartItem(cartItems,cartItemToRemove));
    }

    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,removeItemToCart,clearItemFromCart,cartCount,cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
