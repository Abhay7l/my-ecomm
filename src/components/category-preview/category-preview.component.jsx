import { Link } from "react-router-dom";
import ProductCard from "../products/products.component";
import './category-preview.styles.scss'

const CategoryPreview = ({title,products}) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link className="title" to = { title }>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    //we want to display only 4 items of each product category so we filter them
                    products.filter((_,idx) => idx < 4).map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default CategoryPreview;