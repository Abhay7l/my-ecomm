import Home from "./routes/home/home.component"
import {Routes,Route} from "react-router-dom"
import "./App.css"
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
// const Shop=()=>{
  <Shop></Shop>
//   return <h1>SHOP</h1>;
// };
const App=()=>{
  return(
 
  <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/auth" element={<Authentication/>}/>
    <Route path="/sign-up" element={<SignUpForm/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    </Route>
  </Routes>
  );
}

export default App;

