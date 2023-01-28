// import styled from "styled-components";
// import { Link } from "react-router-dom";

// // by using the styled components we dont have to give classNames which can lead to name clashing the styled components give className on run
// export const NavigationContainer = styled.div`
    // width: 100%;
    // height: 70px;
    // display: flex;
    // justify-content: space-between;
    // // margin-bottom: 25px;
    // // background-color: rgb(67, 66, 66);
    // background-color: white;
    // font-weight: 500;
    // border-bottom: 4px solid rgb(237, 182, 182);
// `
// export const LogoContainer = styled(Link)`

//         width: 70px;
//         height: 100%;
//         padding: 25px;
//     `  
// export const NavLinks = styled.div`
// height: 100%;
// width: 50%;
// display: flex;
// justify-content: flex-end;
// align-items: center;
// padding: 20px;
// `    

// export const NavLink = styled(Link)`
// cursor: pointer;
// padding: 10px 15px;

// `

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
 width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    ${'' /* // margin-bottom: 25px; */}
    ${'' /* // background-color: rgb(67, 66, 66); */}
    ${'' /* background-color: white; */}
    margin-bottom:0px;
    ${'' /* background-color: rgb(67, 66, 66); */}
    z-index:-1;
    font-weight: 500;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color:white;
`;