import moment from "moment";

function Orderlist(props){
    // console.log(props);
  if(props.orders){
      //console.warn("cartlist>>>>>>",props.carts)
    return (
                <div id={`accordion${props.index}`}>
                    <div className="card">
                        <div className="card-header" id={`headingOne${props.index}`}>
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target={`#collapseOne${props.index}`} aria-expanded="true" aria-controls={`collapseOne${props.index}`}>
                                <label>Order Id: {props.orders.orderid}</label>
                            </button>
                            <label className="btn btn-link float-right">Order Placed:{moment(props.orders.orderdate).format('D-MM-YYYY')}</label>
                        </h5>
                        </div>
                    
                        <div id={`collapseOne${props.index}`} className={`${props.index=== 0?"collapse show":"collapse"}`} aria-labelledby={`headingOne${props.index}`} data-parent={`#accordion${props.index}`}>
                        <div className="card-body">
                            <div className="table-responsive shopping-cart">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Order</th>
                                        <th className="text-center">Payment Mode</th>
                                        <th className="text-center">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        <div className="product-item">
                                            {props.orders.cakes.map((i,key)=>{
                                            return    <div key={key}>                                                 
                                            <a className="product-thumb1" href={'/cake/'+i.cakeid}><img src={i.image} style={{width:'80px'}} alt="Product" /></a>
                                            <div className="product-info">
                                                <h6 className="product-title"><a href="#">cake id:{i.cakeid}</a></h6>
                                                <span><em>name:</em> {i.name}</span><span><em>Quantity:</em> {i.quantity}</span>
                                            </div>
                                            </div>
                                            })}        
                                            <div className="product-info">
                                                <h4 className="product-title">Contact Details</h4>
                                                <span><em>Phone:</em> {props.orders.phone}</span><span><em>Email:</em> {props.orders.email}</span><span><em>Address:</em> {props.orders.address}</span>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="text-center text-lg text-medium"> {props.orders.mode}</td>
                                        <td className="text-center text-lg text-medium">&#8377;{props.orders.price}</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
    )

  }
  else{
    return null
  }
}
export default Orderlist