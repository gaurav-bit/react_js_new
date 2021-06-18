import React, { useState, useEffect } from 'react';
import { Route,Link, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import moment from "moment";
import Orderlist from "./Orderlist";

function Myorders(props){
  let [orders,setOrders] = useState([]);
  const [ordertotal,setTotalOrders] = useState(0);
    useEffect(()=>{
        setOrders(props.orderlist);
        setTotalOrders(props.totalorders);
    },[props.totalorders])
    // console.log(props);
    return (
        <div className="container">
              <div className="row mt-3">
                  <div className="col-md-12">
                    <h4 className="float-right">Total Orders: {props.totalorders}</h4>
                    <h4>My Orders</h4>
                    <hr/>
                    {props.orderlist.map((each,index)=>{
                            return (<Orderlist orders={each} key={index} index={index}></Orderlist>)
                    })}
                  </div>
              </div>
        </div>
    )
}



function mapStateToProp(state,props){
  // console.log("state>>>",state,"props>>>>",props)
  // console.log("totalprice>>",state.CartReducer.orders);
  return {
      orderlist:state.CartReducer.orders,
      totalorders:state.CartReducer.totalorders,
      // ordercount:state.CartReducer.totalorders
  }
}

export default connect(mapStateToProp)(withRouter (Myorders))