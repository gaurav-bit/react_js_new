import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Myorders from "./components/Myorders";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Cakedetail from "./components/Cakedetail";
import Search from "./components/Search";
import Pagenotfound from "./components/Pagenotfound";
import ROUTES from "./components/Route";

function App() {
  return (
    <Router>
          <Navbar></Navbar>
          <Switch>
                <Route exact path="/"> <Home/></Route>
                <Route exact path={ROUTES.Register}> <Signup/></Route>
                <Route exact path={ROUTES.Login}> <Login/></Route>
                <Route exact path="/search" component={Search}></Route>
                <Route exact path="/cake/:cakeid" component={Cakedetail}></Route>
                <Route exact path="/cart" component={Cart}></Route>
                <Route path="/checkout" component={Checkout}></Route>
                <Route exact path="/orders"><Myorders/></Route>
                <Route exact path="/*" component={Pagenotfound}></Route>
          </Switch>
            {/* <Signup></Signup> */}

            {/* <Login></Login> */}
    </Router>
   
  );
}

export default App;
