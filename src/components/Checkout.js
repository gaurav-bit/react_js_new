import { useEffect } from 'react';
import { OrderMiddleware } from '../reduxstore/middlewares';
import { Route,Link, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Address from "./Address";
import Confirm from "./Confirm";
import Summary from "./Summary";
import Myorders from "./Myorders";

function Checkout(props){

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-3">
                    <div className="card checkout-card">
                        <ul className="list-group">
                            {/* <Link to="/checkout/orders"><li className="list-group-item">My Orders</li></Link> */}
                            <Link to="/checkout/summary"><li className="list-group-item">Summary</li></Link>
                            <Link to="/checkout/address"><li className="list-group-item">Address</li></Link>
                            <Link to="/checkout/confirm"><li className="list-group-item">Confirm</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                        <Route exact path="/checkout"><Redirect to="/checkout/summary"></Redirect></Route>
                        <Route exact path="/checkout/summary"><Summary cart={props.cartsdata} total={props.totalQuantity} totalprice={props.totalprice} /></Route>
                        <Route exact path="/checkout/address"><Address username={props.username} userdata={props.orderDetails}/></Route>
                        <Route exact path="/checkout/confirm"><Confirm cart={props.cartsdata} orderdata={props.orderDetails} total={props.totalQuantity} totalprice={props.totalprice} /></Route>
                </div>
            </div>
        </div>
    )
}

function mapStateToProp(state,props){
    // console.log("state>>>",state,"props>>>>",props)
    // console.log("totalprice>>",state.CartReducer.orders);
    return {
        username:state.AuthReducer.username,
        cartsdata:state.CartReducer.cart,
        orderDetails:state.CartReducer.orderDetails,
        totalprice:state.CartReducer.totalprice,
        totalQuantity:state.CartReducer.totalQuantity,
        // ordercount:state.CartReducer.totalorders
    }
}

export default connect(mapStateToProp)(withRouter (Checkout))