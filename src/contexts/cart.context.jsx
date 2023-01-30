import { createContext ,useReducer} from "react";
import { createAction } from "../utils/firebase/reducers/reducer.utils";
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

const CART_ACTION_TYPES = {
    SET_CART_ITEMS:'SET_CART_ITEMS',
    SET_IS_CART_OPEN:'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen:false,
    cartItems:[],
    cartCount:0,
    cartTotal:0,
};

const cartReducer = (state,action) => {
    const {type,payload} = action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen:payload,
            }
        default:
            throw new Error(`Unhandeled typed of ${type} in cartReducer`);
    }
}

export const CartProvider = ({children}) =>{
    // const [isCartOpen,setIsCartOpen] = useState(false);//watch lecture 148
    // const [cartItems,setCartItems] = useState([]);
    // const [cartCount,setCartCount] = useState(0);
    // const [cartTotal,setCartTotal] = useState(0);
    
    const [{cartItems,isCartOpen,cartCount,cartTotal},dispatch] = useReducer(cartReducer,INITIAL_STATE);
    //here we have destructured cartItems,isCartOpen ,etc from the state


    // useEffect(()=>{
    //    const newCartCount = cartItems.reduce((total,cartItem)=>
    //    total+cartItem.quantity,0)
    //    setCartCount(newCartCount);
    // },[cartItems]);//whenever the cartItems changes we have to update our cartCount
    
    
    // useEffect(()=>{
    //     const newTotalCount = cartItems.reduce((total,cartItem)=>
    //     total+cartItem.quantity*cartItem.price,0)
    //     setCartTotal(newTotalCount);
    //  },[cartItems]);

    
    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total,cartItem) => total+cartItem.quantity,
            0
        );
        const newCartTotal = newCartItems.reduce((total,cartItem)=>
        total+cartItem.quantity*cartItem.price,0);
        // dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS,payload:{cartItems:newCartItems,cartTotal:newCartTotal,cartCount:newCartCount}});
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartItems:newCartItems,cartTotal:newCartTotal,cartCount:newCartCount})
        )
    }

    const addItemToCart = (productToAdd) =>{
// setCartItems(addCartItem(cartItems,productToAdd));
    const newCartItems = addCartItem(cartItems,productToAdd);
    updateCartItemsReducer(newCartItems);
    }
    const removeItemToCart = (cartItemToRemove) =>{
// setCartItems(removeCartItem(cartItems,cartItemToRemove));
    const newCartItems = removeCartItem(cartItems,cartItemToRemove);
    updateCartItemsReducer(newCartItems);
    }
    const clearItemFromCart = (cartItemToRemove) =>{
// setCartItems(clearCartItem(cartItems,cartItemToRemove));
    const newCartItems = clearCartItem(cartItems,cartItemToRemove);
    updateCartItemsReducer(newCartItems);
    }
    const setIsCartOpen = (bool) => {
        // dispatch({type:CART_ACTION_TYPES.SET_IS_CART_OPEN,payload:bool});
        dispatch(
            createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool)
        );
    }
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        removeItemToCart,
        clearItemFromCart,
        cartCount,
        cartTotal
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
