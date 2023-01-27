// import "./form-input.styles"
// import {FormInputLabel,Input,Group} from './form-input.styles';
import {Group,Input,FormInputLabel} from './form-input.styles.jsx'
const FormInput=({label, ...otherProps})=>{
//lecture 100
    return (
    <Group>
        <Input {...otherProps}/>
    {label && (
     <FormInputLabel shrink = {otherProps.value.length}>
     {/* here if the length of otherprops.value is true than shrink will be true */}
     {label}
     </FormInputLabel>
    )}
     {/* <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} */}
{/* if we enter some value in the input then the label field will have a class shrink append to it else it will have an empty string appended to class form-input-label */}
    </Group>
   );
};

export default FormInput;