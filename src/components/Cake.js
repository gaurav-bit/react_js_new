import { Link } from "react-router-dom"

function Cake(props){
    if(props.cake){
            return (
                    <div className="rhm col-md-3">
                        <div className="card mt-3">
                            {props.cake.image && <img className="card-img-top" src={props.cake.image} alt="" style={{height:"200px"}}/> }
                            
                            <Link to={'/cake/'+props.cake.cakeid}>
                                <div className="card-body" style={{"minHeight":"20vh"}}>
                                    <h5 className="card-title">{props.cake.name}</h5>
                                    <label className="card-text">&#8377;{props.cake.price}</label>
                                </div>
                            </Link>
                            
                        </div>
                    </div>
            )
    }
    else{
      return null
    }
  }
  export default Cake