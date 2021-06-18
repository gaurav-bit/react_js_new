
import { connect } from 'react-redux';
import axios from 'axios';
import { CartListMiddleware, RemoveSpecificakeMiddleware, RemoveCakeByQuantityMiddleware } from '../reduxstore/middlewares';

function Cartlist(props){
    const  removeproduct=(e,cakeid,URI)=>{
        const token = localStorage.token;
        // alert(token);
        //const URI= "removecakefromcart"
        if(URI== "removecakefromcart"){
            props.dispatch(RemoveSpecificakeMiddleware(token,cakeid,URI)); 
            return;
        }
        props.dispatch(RemoveSpecificakeMiddleware(token,cakeid,URI)); 
    };

    const addtocart = (e,data)=>{
        // alert(JSON.stringify(data.price));
        // console.log("adding data from cartlist>>>>",data);

        let  apiurl =process.env.REACT_APP_BASE_URL+"addcaketocart";

        axios({
                method:"post",
                url:apiurl,
                headers:{
                authtoken:localStorage.token
            },
            data:{
                cakeid:data.cakeid,
                name:data.name,
                image:data.image,
                price:data.price,
                weight:data.weight
            }}).then((res)=>{
                // console.log("cakeid>>",res);
                const token = localStorage.token;
                props.dispatch(CartListMiddleware(token)); 
                //  setTimeout(function(){ 
                //    props.history.push('/cart')
                //  }, 1000);
            } ,(error)=>{
                    console.log(error)
            }
        )
        // props.dispatch({
        //     type:"ADDTOCART",
        //     payload:{
        //         cakeid:props.carts.cakeid,
        //         name:props.carts.name,
        //         image:props.carts.image,
        //         price:props.carts.price,
        //         weight:props.carts.weight
        //     }
        // })
    }

    const rmquantity =(e,cakeid)=>{
        // alert("cakeid>>",JSON.stringify(cakeid));
        const URI = "removeonecakefromcart";
        const token = localStorage.token;
        // alert(token);
        //const URI= "removecakefromcart"
        if(URI== "removecakefromcart"){
            props.dispatch(RemoveCakeByQuantityMiddleware(token,cakeid,URI)); 
            return;
        }
        props.dispatch(RemoveCakeByQuantityMiddleware(token,cakeid,URI)); 
        // const token = props.token;
        // //const URI= "removecakefromcart"
        // if(URI== "removecakefromcart"){
        //     props.dispatch(RemoveSpecificakeMiddleware(token,cakeid,URI)); 
        //     return;
        // }
        // props.dispatch(RemoveSpecificakeMiddleware(token,cakeid,URI));
    }
  if(props.carts){
      //console.warn("cartlist>>>>>>",props.carts)
    return (
        <tr>
            <td style={{width:"20%"}}><div className="col"><a href={'/cake/'+props.carts.cakeid}><img className="img-fluid" src={props.carts.image} alt="" style={{height:"80px"}}/></a></div></td>
            <td style={{width:"20%"}}><h4>{props.carts.name}</h4><span><em>Weight : </em>{props.carts.weight}</span><br/><span><em>Flavour : </em>{props.carts.name.split(" ")[0]}</span></td>
            <td style={{width:"20%"}}>
                <div className="input-group col">
                    <span className="input-group-btn">
                        <button type="button" className="quantity-left-minus btn btn-outline-danger btn-number" onClick={(e)=>rmquantity(e,props.carts.cakeid)}  data-type="minus" data-field="">
                            <i className="fa fa-minus-circle" style={{fontSize:"1.2rem"}}></i>
                        </button>
                    </span>
                    <input type="text" name="quantity" className="form-control input-number" value={props.carts.quantity} style={{width:"10%"}} readOnly/>
                    <span className="input-group-btn">
                        <button type="button" className="quantity-right-plus btn btn-outline-success btn-number" data-type="plus" data-field="">
                            <i className="fa fa-plus-circle" onClick={(e)=>addtocart(e,props.carts)} style={{fontSize:"1.2rem"}}></i>
                        </button>
                    </span>
                </div>
            </td>
            <td className="text-center" style={{width:"10%"}}><div className="col">&#8377;{props.carts.price.toFixed(2)}</div></td>
            <td className="text-center" style={{width:"20%"}}><div className="col"><button className="btn btn-sm btn-default" onClick={(e)=>removeproduct(e,props.carts.cakeid,"removecakefromcart")}>&nbsp;<i className="fa fa-trash text-danger"></i>&nbsp;</button></div></td>
        </tr>
    )

  }
  else{
    return null
  }
}
export default connect()(Cartlist)