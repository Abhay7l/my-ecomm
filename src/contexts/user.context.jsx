import { createContext,useEffect,useReducer} from "react";
import { createAction } from "../utils/firebase/reducers/reducer.utils";
// import { onAuthStateChangedListener } from "firebase/auth";
import { onAuthStateChangedListener ,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";
//actual value you want to access;
export const UserContext=createContext({
  setCurrentUser:()=>null,
    currentUser:null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER:'SET_CURRENT_USER'
}

const userReducer = (state,action) => {
  const {type,payload} = action;
  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser:payload
      }
      default:
        throw new Error(`Unhandeled type ${type} in userReducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null,
}
export const UserProvider=({children})=>{
    // const [currentUser,setCurrentUser]=useState(null);//instead of useState we use reducer;
    const [state,dispatch] = useReducer(userReducer,INITIAL_STATE);

    const {currentUser} = state;

    const setCurrentUser = (user) => {
      // dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload: user});
      dispatch(
        createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)
      );
    }

    const value={currentUser,setCurrentUser};


    // signOutUser();
    useEffect(()=>{
      const unsubscribe=onAuthStateChangedListener((user)=>{
        if(user){
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user); 
        // console.log(user);
      })

      return unsubscribe;
    
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}