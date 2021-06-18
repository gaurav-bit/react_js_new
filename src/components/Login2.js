import {Component} from 'react';

class Login2 extends Component {
    constructor(){
        super()
    }
   
    render(){
        return (
            <div className="container" style={{"marginTop":"10px"}}>
                <div className="row">
                    <div className="col-md-12">
                    <form>
                        <div className="card">
                            <div className="card-header">Login2</div>
                            <div className="card-body">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter Your Email"></input>
                                <span className="text-danger"></span>
                                <label>Password</label>
                                <input type="password" className="form-control" name="pwd" placeholder="Enter Your Password"></input>
                                <br></br>
                                <button className="btn btn-success" type="button">Submit</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login2;