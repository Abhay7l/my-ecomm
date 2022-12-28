
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss"

const Directory = ({ categories }) =>{
 return(
    <div className='directory-container'>
  {categories.map((category)=>(
    <CategoryItem key={category.id} category={category} />
    ))}
  {/* background animation */}
    {/* <div class='box'>
  <div class='wave -one'></div>
  <div class='wave -two'></div>
  <div class='wave -three'></div>
</div> */}
        </div>
  
 );
};
export default Directory;