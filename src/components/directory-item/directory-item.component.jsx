import { useNavigate } from 'react-router-dom';
import {DirectoryItemContainer,
  BackGroundImage,
  Body} from './directory-item.styles.jsx'
const DirectoryItem=({category})=>{
  const {imageUrl,title,route}=category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return(
    // if we wouldnt have used useNavigate so we would have to make the DirectoryItemContainer as Link
    <DirectoryItemContainer onClick={onNavigateHandler}>
         {/* <div
         className="background-image" 
         style={{
          backgroundImage:`url(${imageUrl})`,
          }}
          /> */}
          {/* we can make this a styled component and pass the image url as prop */}
          <BackGroundImage imageUrl={imageUrl}/>
          <Body>
           <h2>{title}</h2>
           <p>SHOP NOW</p>
          </Body>
        </DirectoryItemContainer>
  )
}
export default DirectoryItem;