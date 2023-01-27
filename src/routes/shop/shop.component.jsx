// // import SHOP_DATA from '../../shop-data.json';
// import './shop.component.scss'
// import { Fragment, useContext } from "react";
// import { CategoriesContext } from '../../contexts/categories.context';
// // import { CategoriesContext } from "../../contexts/products.context";
// import ProductCard from "../../components/products/products.component";
// const Shop = () =>{
//     const {categoriesMap}=useContext(CategoriesContext);
//    return (
//     <Fragment>
//      {Object.keys(categoriesMap).map((title) => (
//         <Fragment key={title}>
//         <h2>{title}</h2>
//     <div className="products-container">
//         {categoriesMap[title].map((product) => (
//             <ProductCard key={product.id} product={product} />
//         ))}
//     </div>
//         </Fragment>
//      ))}
//     </Fragment>
//    );
// };
// export default Shop;

import {Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.component.scss'

const Shop = () => {
  
  return (
     <Routes>
      <Route index element ={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>} />
     </Routes>
  );
};

export default Shop;