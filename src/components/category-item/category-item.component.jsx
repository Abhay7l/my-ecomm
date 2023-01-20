import "./category-item.components.styles.scss"
// import '../categories'
const CategoryItem=({category})=>{
  const {imageUrl,title}=category;

  return(
    <div className="category-container">
        <div
         className="background-image" 
         style={{
          backgroundImage:`url(${imageUrl})`,
          }}
          />
          <div className="category-body-container">
           <h2>{title}</h2>
           <p>SHOP NOW</p>
          </div>
        </div>
  )
}
export default CategoryItem;