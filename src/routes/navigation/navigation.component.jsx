import { Outlet } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as CrwnLogo} from "../../assests/crown.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigation.styles'
const Navigation=()=>{
  const {currentUser} = useContext(UserContext); 
  const { isCartOpen } = useContext(CartContext);

  //when we click signout it calls for signout handler which waits for the promise return from signoutUser() meth and then it sets the current user to null 
  // const signOutHandler=async()=>{
  //  await signOutUser();
  // //  setCurrentUser(null);
  // //  console.log(res);
  // }
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;