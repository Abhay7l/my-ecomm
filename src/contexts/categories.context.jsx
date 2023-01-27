// //watch lecture 113 to understand the basic structure of context;
// import { createContext ,useState,useEffect} from "react";
// // import { adddCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// // import SHOP_DATA from '../shop-data.js';

// export const CategoriesContext=createContext({
//     categoriesMap:{},
// });

// export const CategoriesProvider =({children})=>{
//     const [categoriesMap,setCategoriesMap]=useState({});
    
//     useEffect(() => {
//         //way to use async function with useEffect
//         //we have to make a new async function within the callback and then callit within the same callback after it is initiallized (lec 129)
//         const getCategoriesMap = async () => {
//             const categoryMap = await getCategoriesAndDocuments('categories');
//             console.log(categoryMap);
//             setCategoriesMap(categoryMap)
//         }
//         getCategoriesMap();
//     },[]);


    
//     //
//     // useEffect(()=>{
//     //     adddCollectionAndDocuments('categories',SHOP_DATA);//this will set the name of collection as categories and store the data as SHOP_DATA;
//     // })//we commented it as we wanted to store the collection only once so after running it once it saves the collection to db and after that we dont use it;
//     const value={categoriesMap};
//    return (
//    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
//    );
// };

// // useEffect(() => {
//     // fetching data from external api using axios
//         //  axios({
//     //       method:"GET",
//     //       url:'https://fakestoreapi.com/products',
//     //     }).then(res => {
//     //       console.log(res.data);
//     //       setProducts(res.data);
//     //     })
//     //    },[])
//     //    axios end

import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};