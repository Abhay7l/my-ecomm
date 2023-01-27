// //here in utilities files we interact with external service (here it is firebase);
// // Import the functions you need from the SDKs you need
// // import { query } from "express";
// import { initializeApp } from "firebase/app";
// import{ getAuth,
//     signInWithRedirect,
//     signInWithPopup,
//     GoogleAuthProvider,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged,
// } from "firebase/auth";
// import{ getFirestore,
//     doc,
//     getDoc,
//     getDocs,
//     setDoc,
//     collection,
//     writeBatch,
//     query,
// }from 'firebase/firestore'
// const firebaseConfig = {
//   apiKey: "AIzaSyBgTZjn-8vC0cuSVwDdjgsnzzZGB8ImAjc",
//   authDomain: "my-ecom-db-40a5f.firebaseapp.com",
//   projectId: "my-ecom-db-40a5f",
//   storageBucket: "my-ecom-db-40a5f.appspot.com",
//   messagingSenderId: "524805465360",
//   appId: "1:524805465360:web:7b1d9ea3e26a7c0f15f195"
// }
// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig)
// const googleProvider = new GoogleAuthProvider()
// // we can habve different providers like microft ,github,facebook
 
// googleProvider.setCustomParameters({
//     prompt:"select_account"
// })
// export const auth = getAuth()
// export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)


// export const db=getFirestore();

// export const adddCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
//     const collectionRef = collection(db,collectionKey);//this will return the reference of the collection with the specified collection key (collectionKey in this)
//     const batch = writeBatch(db);

//     objectsToAdd.forEach((object) => {
//         const docRef = doc(collectionRef, object.title.toLowerCase());//returns the reference of the db metiond;
//         batch.set(docRef,object);
//     });
//     await batch.commit();
//     console.log("done");
// };

// export const getCategoriesAndDocuments = async () => {
//     const collectionRef = collection(db,'categories');//it will return the collection with specified name from db
//     const q = query(collectionRef);
//     const querySnapshot = await getDocs(q);
//     const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
//         const {title,items} = docSnapshot.data();
//         acc[title.toLowerCase()] = items;
//         return acc;
//     },{});

//     return categoryMap;
// }

// export const createUserDocumentFromAuth = async (userAuth,additionalInformation={})=>{
//     if(!userAuth) return;//if we dont get a userauth we return
//     const userDocRef=doc(db,'users',userAuth.uid)
//                 //parameters : 1 database 2 collections 3 uniqueIdentifier
//     console.log(userDocRef);

//     const userSnapshot = await getDoc(userDocRef)
//                             //getDoc will try to get get data from a document
//     console.log(userSnapshot)
//     console.log(userSnapshot.exists())
//                     // exists method tells that if the instance of data/document exists or not

//                     //if user data does not exist
//                     //create / set the document with data from userAuth in my collection         
//    if(!userSnapshot.exists()){
//     //if doesn't exist we create user with fields displayName,email,CreatedAt
//         const { displayName, email}=userAuth
//         const createdAt = new Date()
//         try{
//             await setDoc(userDocRef,{
//                 displayName,
//                 email,
//                 createdAt
//             })
//         }catch(error){
//             console.log('error creating user ',error.message);
//         }
//     }
//     //if user data exists
//     //return  userDocRef
//     return userDocRef
// }
// export const createAuthUserWithEmailAndPassword = async (email,password) => {
//     if(!email || !password) return ;//if we dont get emmail or password then we return;

//     return await createUserWithEmailAndPassword(auth,email,password);
// };
// export const signInAuthUserWithEmailAndPassword = async (email,password) => {
//     if(!email || !password) return ;//if we dont get emmail or password then we return;

//     return await signInWithEmailAndPassword(auth,email,password);
// };

// export const signOutUser =async ()=> await signOut(auth);


// //whenever user authenticates(signs in or out) the callback will get invokes
// export const onAuthStateChangedListener=(callback)=>
// onAuthStateChanged(auth,callback);

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgTZjn-8vC0cuSVwDdjgsnzzZGB8ImAjc",
  authDomain: "my-ecom-db-40a5f.firebaseapp.com",
  projectId: "my-ecom-db-40a5f",
  storageBucket: "my-ecom-db-40a5f.appspot.com",
  messagingSenderId: "524805465360",
  appId: "1:524805465360:web:7b1d9ea3e26a7c0f15f195"
}
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');//this will return the reference of the collection with the specified collection key (collectionKey in this)
  const q = query(collectionRef);
  
  const querySnapshot = await getDocs(q);//snapshots are used to get the docs of a particular collection
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};


//Authentication
export const createUserDocumentFromAuth = async (userAuth,additionalInformation={})=>{
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
