// import SHOP_DATA from '../../shop-data.json';
import './shop.component.scss'
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/products/products.component";
const Shop = () =>{
    const {products}=useContext(ProductsContext)
   return (
    <div className="products-container">
        {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
        ))}
    </div>
   );
}
export default Shop;