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

import { useContext } from 'react';

// import ProductCard from '../../components/product-card/product-card.component';
// import ProductCard from '../../components/products';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
// import './shop.component.styles.scss';
import './shop.component.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
 <div className='shop-container'>
      {Object.keys(categoriesMap).map((title) => {
            const products =categoriesMap[title];
            return (
                <CategoryPreview key={title} title={title} products={products}/>
            );
            })}
          </div>
  );
};

export default Shop;