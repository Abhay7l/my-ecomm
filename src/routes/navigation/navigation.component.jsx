import { Outlet,Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as CrwnLogo} from "../../assests/crown.svg"
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss'
const Navigation=()=>{
  const {currentUser}=useContext(UserContext); 
  //when we click signout it calls for signout handler which waits for the promise return from signoutUser() meth and then it sets the current user to null 
  // const signOutHandler=async()=>{
  //  await signOutUser();
  // //  setCurrentUser(null);
  // //  console.log(res);
  // }
    return ( 
      <Fragment>
      <div className="Nav">
      <Link className="logo-container" to='/'>
        <CrwnLogo className="logo"/>
        </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to = '/shop'>
        SHOP
        </Link>
        {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ):(
        <Link className="nav-link" to = '/auth'>
        SIGN IN
        </Link>
          )}
      </div> 
      </div>
      <Outlet/>
      </Fragment>
    )
  }
  export default Navigation;