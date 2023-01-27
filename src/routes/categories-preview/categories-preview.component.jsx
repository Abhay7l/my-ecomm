import { Fragment, useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
// import './shop.component.styles.scss';
// import './shop.component.scss'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment> 
    {/* //Fragment can be replaced by <></> */}
      {Object.keys(categoriesMap).map((title) => {
            const products =categoriesMap[title];
            return (
                <CategoryPreview key={title} title={title} products={products}/>
            );
            })}
    </Fragment>
  );
};

export default CategoriesPreview;