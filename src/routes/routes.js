import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignInSide from "../components/sign-in";

import ButtonAppBar from "../components/navbar"
import WorkSection from "../components/workSection";
import CarouselImage from "../components/carousel";
import SignUp from "../components/signup/signup";
import DashBoard from "../components/dashboard/dashboard";
import AddResturent from "../components/dashboard/add-resturent";
import AddProducts from "../components/dashboard/add-products.js";
import Order from "../components/order/order";
import Mission from "../components/mission/mission"
import SignUpText from "../components/signup/sign-up-bottom";
import CardsM from "../cards/cards"
import Footer from "../components/footer/footer"
function ReactRoutes(){
    return(
        <Router>
        
        <Switch>
            <Route exact path="/">
        <ButtonAppBar />
            <CarouselImage/>   
            <WorkSection/>
            <CardsM/><br/>
            <Mission/>
            <SignUpText/>
            <Footer/>
            </Route>
            <Route  path="/Sign-In">
                <SignInSide />
            </Route>
            <Route  path="/Sign-UP">
                <SignUp />
            </Route>
            <Route  path="/Dash-Board">
                <DashBoard />
            </Route>
            <Route  path="/Add-Resturent">
                <AddResturent />
            </Route>
            <Route  path="/Add-Product">
                <AddProducts />
            </Route>
            <Route  path="/Order">
                <Order />
            </Route>
            </Switch>
        </Router>
    )
};
export default ReactRoutes;