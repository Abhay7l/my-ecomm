// import { sign } from "crypto";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./sign.scss"
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
{/* <button onClick={logGoogleUser}>SIGN IN</button> */}
{/* <button onClick={logGoogleUser}buttonType="google">Sign In With Google</button> */}
{/* <div className="sign"> */}