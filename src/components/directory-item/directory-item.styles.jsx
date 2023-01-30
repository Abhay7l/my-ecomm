// import styled from "styled-components";

// export const BackGroundImage = styled.div`
//     ${'' /* transform: scale(1.1);
//     transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95); */}
//     width: 100%;
//       height: 100%;
//       background-size: cover;
//       background-position: center;
//     background-image: ${({imageUrl}) => `url(${imageUrl})`};
// `

// export const Body = styled.div`
//     height: 90px;
//       padding: 0 25px;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       border: 1px solid black;
//       background-color: white;
//       opacity: 0.7;
//       position: absolute;
  
//       h2 {
//         font-weight: bold;
//         margin: 0 6px 0;
//         font-size: 22px;
//         color: #4a4a4a;
//         text-transform:uppercase;
//       }
  
//       p {
//         font-weight: lighter;
//         font-size: 16px;
//       }
// `
// export const DirectoryItemContainer = styled.div`
//  min-width: 30%;
//     height: 280px;
//     flex: 1 1 auto;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid black;
//     margin: 0 7.5px 15px;
//     overflow: hidden;
  
//     &:hover {
//       cursor: pointer;
  
//       & ${BackGroundImage} {
//         transform: scale(1.1);
//         transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//       }
  
//       & ${Body} {
//         opacity: 0.9;
//       }
//     }
//     ${'' /* &.large {
//       height: 380px;
//     } */}
  
//     &:first-child {
//       margin-right: 7.5px;
//     }
  
//     &:last-child {
//       margin-left: 7.5px;
//     }
  

// `

// // .directory-item-container {
   
  
// //     &.large {
// //       height: 380px;
// //     }
  
// //     &:first-child {
// //       margin-right: 7.5px;
// //     }
  
// //     &:last-child {
// //       margin-left: 7.5px;
// //     }
  
// //     .background-image {
// //       width: 100%;
// //       height: 100%;
// //       background-size: cover;
// //       background-position: center;
// //     }
  
// //     .body{
// //       height: 90px;
// //       padding: 0 25px;
// //       display: flex;
// //       flex-direction: column;
// //       align-items: center;
// //       justify-content: center;
// //       border: 1px solid black;
// //       background-color: white;
// //       opacity: 0.7;
// //       position: absolute;
  
// //       h2 {
// //         font-weight: bold;
// //         margin: 0 6px 0;
// //         font-size: 22px;
// //         color: #4a4a4a;
// //       }
  
// //       p {
// //         font-weight: lighter;
// //         font-size: 16px;
// //       }
// //     }
// //   }
import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

`;

export const Body = styled.div`
  height: 90px;
  
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;

    @media screen and (max-width:800px){
    font-size:18px;
  }
  }
  p {
    font-weight: lighter;
    font-size: 16px;

    @media screen and (max-width:800px){
    font-size:14px;
  }
  }
  @media screen and (max-width:800px){
    width:140px;
  }
`;

export const DirectoryItemContainer = styled.div`
  height: ${({size}) => (size?'300px':'380px')};
    
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & ${Body} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (min-width:800px){
    height:380px;
  }
  @media screen and (max-width:450px){
    height:240px;
  }
`;