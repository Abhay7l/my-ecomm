import styled, {css} from "styled-components";

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
     top: -14px;
     font-size: 12px;
     color: ${mainColor};
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
${({shrink}) => shrink && shrinkLabelStyles};
${'' /* if shrink class is activated than it will also have the styles of shrinkInputLabel */}
    ${'' /* &.shrink {
      @include shrinkLabel();
    } */}
`;

export const Input = styled.input`
background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
      background-color: rgb(248, 243, 243);
      // color: white;
    }
    &:focus ~ ${FormInputLabel} {
      ${'' /* @include shrinkLabel(); */}
      ${shrinkLabelStyles};
    }
`;

export const Group = styled.div`
position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

//    the '~' says that from parent class we have form-input class when we focus on it then attach the class shrinkLabel to the sibling of form-input or to the subsequence sibling
// In CSS, the symbol tilde(~) is know as Subsequent-sibling Combinator (also known as tilde or squiggle or twiddle or general-sibling selector). 
// As the name suggests it is made of the “tilde” (U+007E, ~) character that separates two sequences of simple selectors. 
// The elements represented by the two sequences share the same parent in the document tree. It is used to select all the second sequences which are preceded by the first sequence (not necessarily immediately) or in simple words selects all elements that are siblings of a specified element.

// Syntax:
// first-sequence ~ second-sequence {
    /* property:value; */
// }

