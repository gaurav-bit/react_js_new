
function Summarylist(props){
    if(props.carts){
        return (
            <tr>
                <td style={{width:"20%"}}><div className="col"><a href={'/cake/'+props.carts.cakeid}><img className="img-fluid" src={props.carts.image} alt="" style={{height:"80px"}}/></a></div></td>
                <td style={{width:"20%"}}><h4>{props.carts.name}</h4><span><em>Weight : </em>{props.carts.weight}</span><br/><span><em>Flavour : </em>{props.carts.name.split(" ")[0]}</span></td>
                <td style={{width:"20%"}}>
                    <div className="input-group col">
                        <input type="text" name="quantity" className="form-control input-number" value={props.carts.quantity} style={{width:"10%"}} readOnly/>
                    </div>
                </td>
                <td className="text-center" style={{width:"10%"}}><div className="col">&#8377;{props.carts.price.toFixed(2)}</div></td>
            </tr>
        )
    }
}

export default Summarylist