import { Route,Link, Redirect} from "react-router-dom";
import Summarylist from "./Summarylist";
function Summary(props){
    // alert(JSON.stringify(props));
    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-muted float-right pt-2">Total Cakes : {props.total}</h5>
                        <h3>SHOPPING SUMMARY</h3>
                        <hr/>
                        <div className="table-responsive">
                            <table className="table table-striped" style={{border:"none"}}>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th className="text-center">Quantity</th>
                                        <th className="text-center">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { props.cart.map((each,index)=>{
                                            return (
                                                <Summarylist carts={each} key={index}></Summarylist>
                                            )
                                    })}
                                </tbody>
                            </table>
                            <div className="shopping-cart-footer pt-2 pb-5">
                                <div className="column text-lg float-right">Total: <span className="text-medium">&#8377;{ props.totalprice.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="shopping-cart-footer pt-2 pb-3">
                                <div className="column float-right"><Link className="btn btn-outline-success" to="/checkout/address">Continue</Link></div>
                                <div className="column"><Link className="btn btn-outline-secondary" to="/cart"><i className="fas fa-arrow-left"></i>&nbsp;Back</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Summary