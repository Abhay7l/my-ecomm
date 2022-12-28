// import { sign } from "crypto";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./sign.scss"
import Button from "../../components/button/button.component";
import { Fragment } from "react";
const Authentication=()=>{

    return (

        <div className="container">
    <SignInForm className="sign"/>
    <SignUpForm className="sisgn"/>
    {/* background animation */}
           {/* <div class='box'>
  <div class='wave -one'></div>
  <div class='wave -two'></div>
  <div class='wave -three'></div>
</div> */}
        </div>
    )
}
export default Authentication;
{/* <button onClick={logGoogleUser}>SIGN IN</button> */}
{/* <button onClick={logGoogleUser}buttonType="google">Sign In With Google</button> */}
{/* <div className="sign"> */}