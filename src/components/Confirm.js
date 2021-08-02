import { Route,Link, Redirect, withRouter} from "react-router-dom";
import { PlaceOrderMiddleware,OrderMiddleware } from '../reduxstore/middlewares';
import { connect } from "react-redux";

function Confirm(props){
    // console.log(props);
    var submit = (event)=>{
        event.preventDefault();
        // var data = props.orderdata;
        const token = localStorage.token
        var data = {
            city:props.orderdata.city,
            name:props.orderdata.username,
            address:props.orderdata.address,
            pincode:props.orderdata.pincode,
            phone:props.orderdata.phone,
            cakes:props.cart,
            // cakes:{...props.cart},
            price:props.totalprice
        }
        // console.log(data)
        props.dispatch(PlaceOrderMiddleware(token,data));
        props.dispatch(OrderMiddleware(token));

        props.history.push("/orders");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form id="form" className="form">
                        <h3>ORDER CONFIRMATION</h3>
                        <hr/>
                        <div className="form-group">
                            <label htmlFor="username">Name<span className="text-danger">*</span></label>
                            <input className="form-control" name="username" type="text" id="username" placeholder="Enter name" value={props.orderdata.username} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number<span className="text-danger">*</span></label><input className="form-control" name="phone" type="number" id="phone" placeholder="Enter Phone" value={props.orderdata.phone} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City<span className="text-danger">*</span></label><input className="form-control" name="city" type="text" id="city" placeholder="Enter City" value={props.orderdata.city} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pincode">Pincode<span className="text-danger">*</span></label><input className="form-control" type="number" name="pincode" id="pincode" placeholder="Enter Pincode" value={props.orderdata.pincode} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address<span className="text-danger">*</span></label>
                            <textarea className="form-control" type="number" name="address" id="address" placeholder="Enter Address" rows="3" value={props.orderdata.address} readOnly></textarea>
                        </div>
                        <div className="shopping-cart-footer pt-2 pb-2">
                            <div className="column text-lg float-right">Total Price: <span className="text-medium">&#8377;{ props.totalprice.toFixed(2) }</span>
                            </div>
                            <div className="column text-lg">Total Quantity: <span className="text-medium"> { props.total }</span></div>
                        </div>
                        <div className="shopping-cart-footer pt-2 pb-3">
                            <div className="column float-right"><button className="btn btn-outline-success" onClick={submit}>PLACE ORDER</button></div>
                            <div className="column"><Link className="btn btn-outline-secondary" to="/checkout/address"><i className="fas fa-arrow-left"></i>&nbsp;Back</Link></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default connect()(withRouter(Confirm))