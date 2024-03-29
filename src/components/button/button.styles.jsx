import styled from "styled-components";


export const BaseButton = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 12px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}
`
// .button-container {
 
export const GoogleSignInButton = styled(BaseButton)`
background-color: #5794f6;
color: white;

&:hover {
  background-color: #3f79d6;
  border: none;
}
`
export const InvertedButton = styled(BaseButton)`
&.inverted {
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`  