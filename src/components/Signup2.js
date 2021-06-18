import {Component} from 'react';

class Signup2 extends Component {
    constructor(){
        super()
    }
   
   validate = ()=>{
           var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
           if (this.email.value.match(validRegex)) {
               // alert("Valid email address!");
               return true;
             } else {
               alert("Invalid email address!");
               return false;
             }
   
   }
    render(){
        return (
            <div className="container" style={{"marginTop":"10px"}}>
                <div className="row">
                    <div className="col-md-12">
                    <form>
                        <div className="card">
                            <div className="card-header">Register</div>
                            <div className="card-body">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter Your name"></input>
                                <label>Email</label>
                                <input type="email"  ref={(val) => this.email = val} className="form-control" name="email" placeholder="Enter Your Email"></input>
                                <span className="text-danger"></span>
                                <label>Password</label>
                                <input type="password" className="form-control" name="pwd" placeholder="Enter Your Password"></input>
                                <br></br>
                                <button onClick={this.validate} className="btn btn-success" type="button">Submit</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup2;