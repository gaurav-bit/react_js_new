
//import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link,withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import Cartlist from "./Cartlist";
import { EmptyCartMiddleware } from '../reduxstore/middlewares';

function Cart(props){
    var apiurl=process.env.REACT_APP_BASE_URL+"cakecart";
    var [carts, setcartCakes] = useState([]);

    var emptycart = () =>{
        // alert("hello");
        const token = localStorage.token;
        props.dispatch(EmptyCartMiddleware(token)); 
    }

    // useEffect(()=>{
    //     // console.log(props.cartcount);
    //     setcartCakes(props.cartsdata);
    // },[props.cartsdata]);
    // alert(JSON.stringify(carts.length));
    useEffect(()=>{
        axios({
            url:apiurl,
            method:"post",
            headers:{authtoken:localStorage.token},
            data:{}
        }).then((response)=>{
            // console.log("Cart Cakes from api",response,response.data)
            setcartCakes(response.data.data)
        },(error)=>{
            console.log("Error from api",error)
        }

        )
    },[props]
    )
    if (carts.length == 0) {
        return (
            <div className="container p-5">
                <img className="img-responsive w-100" height="400" src="/images/empty-cart.png" alt="" />
            </div>
        )
    }

    return (
        <div className="container pt-3 pb-3">
            <div className="row">
                <div className="col-md-12">
                    <h3>SHOPPING CART</h3>
                    <span className="text-muted">You currently have {props.totalQuantity} items in your cart.</span>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped" style={{border:"none"}}>
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Name</th>
                                                    <th className="text-center">Quantity</th>
                                                    <th className="text-center">Price</th>
                                                    <th className="text-center"><a className="btn btn-sm btn-outline-danger" href="#" onClick={emptycart}>Clear All</a></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { carts.map((each,index)=>{
                                                        return (<Cartlist carts={each} key={index}></Cartlist>)
                                                })}
                                            </tbody>
                                        </table>
                                        <div className="shopping-cart-footer pt-2 pb-5">
                                            <div className="column text-lg float-right">Total: <span className="text-medium">&#8377;{ props.totalprice.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="shopping-cart-footer pt-2 pb-3">
                                            <div className="column float-right"><Link className="btn btn-outline-success" to="/checkout">Checkout</Link></div>
                                            <div className="column"><Link className="btn btn-outline-secondary" to="/"><i className="fas fa-arrow-left"></i>&nbsp;Back to Shopping</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                       
                </div>
            </div>
        </div>
    )
}

function mapStateToProp(state,props){
    // console.log("state>>>",state,"props>>>>",props)
    console.log("totalprice>>",state.CartReducer.totalprice);
    return {
        // username:state.AuthReducer.username,
        // isloggedin:state.AuthReducer.isloggedin,
        cartsdata:state.CartReducer.cart,
        totalprice:state.CartReducer.totalprice,
        totalQuantity:state.CartReducer.totalQuantity
        // ordercount:state.CartReducer.totalorders
    }
}

export default connect(mapStateToProp)(withRouter (Cart))