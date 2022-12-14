//here in utilities files we interact with external service (here it is firebase);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth,
    signInWithRedirect,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import{ getFirestore,doc,getDoc,setDoc}from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBgTZjn-8vC0cuSVwDdjgsnzzZGB8ImAjc",
  authDomain: "my-ecom-db-40a5f.firebaseapp.com",
  projectId: "my-ecom-db-40a5f",
  storageBucket: "my-ecom-db-40a5f.appspot.com",
  messagingSenderId: "524805465360",
  appId: "1:524805465360:web:7b1d9ea3e26a7c0f15f195"
}
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const googleProvider = new GoogleAuthProvider()
// we can habve different providers like microft ,github,facebook
 
googleProvider.setCustomParameters({
    prompt:"select_account"
})
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
export const signInWithGoogleRedirect =() => signInWithRedirect(auth,googleProvider)


export const db=getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
    if(!userAuth) return;//if we dont get a userauth we return
    const userDocRef=doc(db,'users',userAuth.uid)
                //parameters : 1 database 2 collections 3 uniqueIdentifier
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
                            //getDoc will try to get get data from a document
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
                    // exists method tells that if the instance of data/document exists or not

                    //if user data does not exist
                    //create / set the document with data from userAuth in my collection         
   if(!userSnapshot.exists()){
    //if doesn't exist we create user with fields displayName,email,CreatedAt
        const { displayName, email}=userAuth
        const createdAt = new Date()
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log('error creating user ',error.message);
        }
    }
    //if user data exists
    //return  userDocRef
    return userDocRef
}
export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return ;//if we dont get emmail or password then we return;

    return await createUserWithEmailAndPassword(auth,email,password);
};
export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return ;//if we dont get emmail or password then we return;

    return await signInWithEmailAndPassword(auth,email,password);
};

export const signOutUser =async ()=> await signOut(auth);


//whenever user authenticates(signs in or out) the callback will get invokes
export const onAuthStateChangedListener=(callback)=>
onAuthStateChanged(auth,callback);